const mysql = require('mysql');
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'db_katalog'
})

module.exports = db;