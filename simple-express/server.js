const express = require('express');

// 利用 express 建立 express application
let app = express();

app.get('/', (req, res, next) => {
    res.send('Hello');
});

app.get('/about', (req, res, next) => {
    res.send('About Us');
});

app.listen(3000, function () {
    console.log('Listen on port 3000');
});