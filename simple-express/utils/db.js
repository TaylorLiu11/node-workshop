const mysql = require('mysql');
const Promise = require('bluebird');

require('dotenv').config();

let connection = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
// console.log(connection);

connection = Promise.promisifyAll(connection);

module.exports = connection;

// let app = Express();

// app.use((req, res, next) => {
//     next();
// });

// app.get('/stock', (req, res, next) => {

// });

// app.listen(8000, () => {
//     console.log('Listening on port 8000');
// });

