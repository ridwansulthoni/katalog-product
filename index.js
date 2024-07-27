const express = require('express');
const app = express();
const port = 3000;
const db = require('./connection');
const response = require('./response');

app.get('/', (req, res) => {
    db.query("SELECT * FROM produk", (error, result)=> {
        response(200, result, "get all data product", res);
    })
})

app.get('/kategori', (req, res)=> {
    db.query("SELECT * FROM kategori", (error,result) =>{
        response(200, result, "get all data kategori", res);
    })
})

app.get('/merek', (req, res)=> {
    db.query("SELECT * FROM merek", (error, result)=> {
        response(200, result, "get all data merek", res);
    })
})


app.listen(port, ()=> {
    console.log(`Running on port ${port}`);
})