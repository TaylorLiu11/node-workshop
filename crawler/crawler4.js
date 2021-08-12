const axios = require('axios');
const moment = require('moment');
const fs = require('fs/promises');
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

function getStockCode() {
    return fs.readFile("stock.txt", "utf8");

}

function getStockData(stockCode) {
    return axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
        params: {
            response: 'json',
            date: moment().format('YYYYMMDD'),
            stockNo: stockCode,
        }
    });

}

function queryStockCode(stockCode) {
    return new Promise((res, rej) => {
        connection.query('SELECT * FROM stock WHERE stock_id = ?', [stockCode], function (error, results, fields) {
            if (error) {
                rej();
            }
            res(results);
        });
    });
}

function parseData(stockData, stockCode) {
    return stockData = stockData.map(day => {
        // Mapping each item and removing ","
        day = day.map(item => {
            return item = item.replace(/,/g, '');
        });

        // Make the date to the format we want
        day[0] = parseInt(day[0].split('/').join('')) + 19110000;

        // Parse the string to number to let the plus sign disappear
        day[7] = parseFloat(day[7]).toFixed(2);

        // Put stockCode inside
        day.unshift(stockCode);

        // Return the data
        return day;

    });

}

function insertData(parsedData) {
    return new Promise((res, rej) => {
        connection.query(
            "INSERT IGNORE INTO stock_price (stock_id, date, volume, amount, open_price, high_price, low_price, close_price, delta_price, transactions) VALUES ?",
            [parsedData],
            function (error, results, fields) {
                if (error) {
                    rej(error);
                }
                res(results);
            }
        );
    });
}

(async function () {
    try {
        let stockCode = await getStockCode();
        stockCode = stockCode.replace(/\D/g, '');

        let dbStock = await queryStockCode(stockCode);
        if (dbStock.length === 0) {
            throw "資料庫沒有此筆股票資料:(";
        }

        console.info('資料庫有您要找的:)');

        let stockData = await getStockData(stockCode);

        stockData = stockData.data.data;
        let parsedData = parseData(stockData, stockCode);
        console.log(parsedData);

        let insertStockData = await insertData(parsedData);

        console.log(insertStockData);

    } catch (e) {
        console.error('###################');
        console.error(`Oh error: ${e}`);

    } finally {
        // 不關閉連線的話會認為程式一直在執行
        connection.end();

    }

})();

