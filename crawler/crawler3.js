const axios = require('axios');
const moment = require('moment');
const fs = require("fs");

(async function getStockName() {
    let stockCode = await new Promise((res, rej) => {
        fs.readFile("stock.txt", "utf8", (err, stockCode) => {
            if (err) {
                rej(`Something went wrong:(( ${err}`);
            } else {
                // res(stockCode.trim());
                // console.log(stockCode.trim());

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