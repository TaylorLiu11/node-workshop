const express = require('express');
const connection = require('./utils/db');
const cors = require("cors");

// 利用 express 建立 express application
let app = express();

app.use(cors());

app.use((req, res, next) => {
    console.log('Check 123');
    next();
});

app.use((req, res, next) => {
    console.log(req.method);
    next();
});

app.get('/', (req, res, next) => {
    res.send('Hello');
});

app.get('/about', (req, res, next) => {
    res.send('About Us');
});

app.get('/stock', async (req, res, next) => {
    let results = await connection.queryAsync("SELECT * FROM stock");
    res.json(results);
});

app.get('/stock/:stockCode', async (req, res, next) => {
    let stockCode = req.params.stockCode;
    let results = await connection.queryAsync("SELECT * FROM stock_price WHERE stock_id = " + stockCode);
    res.json(results);
});

app.use((req, res) => {
    res.status(404).json({ message: "這個頁面不存在！" });
});

app.listen(8000, function () {
    console.log('Listen on port 8000');
});