const axios = require('axios');
const moment = require('moment');

// fs讀股票代碼
const fs = require('fs');

// console.log(moment().format('YYYYMMDD'));

fs.readFile("stock.txt", "utf8", (err, stockCode) => {
    if (err) {
        console.log(err);
    } else {
        console.log(stockCode.trim());
        // Trim "stock.txt" to make it one line as we want it to be
    }
});