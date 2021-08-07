const axios = require('axios');
const moment = require('moment');
const fs = require("fs");

fs.readFile("stock.txt", "utf8", (err, stockCode) => {
    axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
        params: {
            response: 'json',
            date: moment().format('YYYYMMDD'),
            stockNo: stockCode.trim().replace(/\D/g, ''),
        }
    })
        .then(res => console.log(res.data.title))
        .catch(err => console.error('Something went wrong:((', err));
});


// axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
//     params: {
//         response: 'json',
//         date: moment().format('YYYYMMDD'),
//         stockNo: 2330,
//     }
// })
//     .then(res => console.log(res.data));

