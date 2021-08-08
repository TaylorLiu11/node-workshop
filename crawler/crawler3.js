const axios = require('axios');
const moment = require('moment');
const fs = require("fs");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    port: 3306,
    password: "12345",
    database: "stock",
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