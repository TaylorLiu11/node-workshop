const axios = require('axios');
const moment = require('moment');
const fs = require("fs");

new Promise((res, rej) => {
    fs.readFile("stock.txt", "utf8", (err, stockCode) => {
        if (err) {
            rej(`Something went wrong:(( ${err}`);
        } else {
            // res(stockCode.trim());

            // To remove all non-numeric characters
            res(stockCode.replace(/\D/g, ''));
        }
    });
})
    .then(stockCode => {
        return axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
            params: {
                response: 'json',
                date: moment().format('YYYYMMDD'),
                stockNo: stockCode,
            }
        });
    })
    .then(res => {
        console.log(res.data.title);
    })
    .catch(err => console.error(err));



// axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
//     params: {
//         response: 'json',
//         date: moment().format('YYYYMMDD'),
//         stockNo: 2330,
//     }
// })
//     .then(res => console.log(res.data));

