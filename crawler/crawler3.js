const axios = require('axios');
const moment = require('moment');
const fs = require("fs");
const mysql = require("mysql");
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) {
        console.error("資料庫連不上");
    }
});

// 不關閉連線，認為程式一直在執行
connection.end();

(async function getStockName() {
    let stockCode = await new Promise((res, rej) => {
        fs.readFile("stock.txt", "utf8", (err, stockCode) => {
            if (err) {
                rej(`Something went wrong:(( ${err}`);
            } else {
                // res(stockCode.trim());

                // To remove all non-numeric characters
                res(stockCode.trim().replace(/\D/g, ''));
                // console.log(stockCode.trim().replace(/\D/g, ''));
            }
        });
    });

    let res = await axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
        params: {
            response: 'json',
            date: moment().format('YYYYMMDD'),
            stockNo: stockCode,
        }
    });
    console.log(res.data.title);
})();