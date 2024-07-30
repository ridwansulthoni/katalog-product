const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./connection');
const response = require('./response');

app.use(bodyParser.json());

app.get('/api/v1/produk', (req, res) => {
    const sql = `SELECT * FROM produk`
    db.query(sql, (err, result)=> {
        if (err) throw err;
        response(200, result, "get all data product", res);
    })
})

app.post('/api/v1/produk', (req, res) => {
    const { namaProduk,deskripsi,harga,stok,kategori,merek,foto } = req.body
    const sql = `INSERT INTO produk (Nama_Produk, Deskripsi, Harga, Stok, ID_Kategori, ID_Merek, Gambar) VALUES ('${namaProduk}','${deskripsi}','${harga}','${stok}','${kategori}','${merek}','${foto}')`
    db.query(sql, (err, result)=> {
        if (err) response(500, "Invalid", "Error", res);
        if (result?.affectedRows) {
            const data = {
                isSuccess: result.affectedRows,
                id: result.insertId,
            }
            response(200, data, "add data success", res);
        }
    })
})

app.put('/api/v1/produk', (req, res) => {
    const { idProduk, namaProduk,deskripsi,harga,stok,kategori,merek,foto } = req.body
    const sql = `UPDATE produk SET Nama_Produk = '${namaProduk}', Deskripsi = '${deskripsi}', 
                Harga = '${harga}', Stok = '${stok}', ID_Kategori = '${kategori}', 
                ID_Merek = '${merek}', Gambar = '${foto}' WHERE ID_Produk = '${idProduk}'`

    db.query(sql, (err, result)=> {
        if (err) response(500, "Invalid", "Error", res);
        if (result?.affectedRows) {
            const data = {
                isSuccess: result.affectedRows,
                message: result.message,
            }
            response(200, data, "update data success", res);
        } else {
            response(404, "produk not found", "error", res);
        }
    })
})

app.delete('/api/v1/produk', (req, res) => {
    const { idProduk} = req.body
    const sql = `DELETE FROM produk WHERE ID_Produk = '${idProduk}'`
    db.query(sql, (err, result)=> {
        if (err) response(500, "Invalid", "Error", res);
        if (result?.affectedRows) {
            const data = {
                idDeleted: result.affectedRows
            }
            response(200, data, "delete data success", res);
        } else {
            response(404, "produk not found", "error", res);
        }
    })
})

app.get('/api/v1/kategori', (req, res)=> {
    const sql = `SELECT * FROM kategori`;
    db.query(sql, (err,result) =>{
        if (err) throw err
        response(200, result, "get all data kategori", res);
    })
})

app.post('/api/v1/kategori', (req, res)=> {
    const { namaKategori } = req.body;
    const sql = `INSERT INTO kategori (Nama_Kategori)VALUES ('${namaKategori}')`;
    db.query(sql, (err,result) =>{
        if (err) response(500,"Invalid","Error", ress);
        if (result?.affectedRows) {
            const data = {
                isSuccess: result.affectedRows,
                id: result.insertId
            }
            response(200, data, "add data success", res);
        }
    })
})
app.put('/api/v1/kategori', (req, res)=> {
    const { idKategori, namaKategori } = req.body;
    const sql = `UPDATE kategori SET Nama_Kategori = '${namaKategori}' WHERE ID_Kategori = '${idKategori}'`;
    db.query(sql, (err,result) =>{
        if (err) response(500, "Invalid", "Error", res);
        if (result?.affectedRows) {
            const data = {
                isSuccess: result.affectedRows,
                message: result.message
            }
            response(200, data, "update data success", res);
        } else {
            response(404,"Kategori not found","error",res);
        }
    })
})
app.delete('/api/v1/kategori', (req, res)=> {
    const { idKategori } = req.body;
    const sql = `DELETE FROM kategori WHERE ID_Kategori = '${idKategori}'`;
    db.query(sql, (err,result) =>{
        if (err) response(500,"Invalid","Error",res);
        if (result?.affectedRows) {
            const data = {
                idDeleted: result.affectedRows
            }
            response(200, data, "delete data Success", res);
        } else {
            response(404, "Kategori not found", "error", res);
        }
    })
})

app.get('/api/v1/merek', (req, res)=> {
    db.query("SELECT * FROM merek", (error, result)=> {
        response(200, result, "get all data merek", res);
    })
})
app.post('/api/v1/merek', (req, res)=> {
    db.query("SELECT * FROM merek", (error, result)=> {
        response(200, result, "get all data merek", res);
    })
})
app.put('/api/v1/merek', (req, res)=> {
    db.query("SELECT * FROM merek", (error, result)=> {
        response(200, result, "get all data merek", res);
    })
})
app.delete('/api/v1/merek', (req, res)=> {
    db.query("SELECT * FROM merek", (error, result)=> {
        response(200, result, "get all data merek", res);
    })
})


app.listen(port, ()=> {
    console.log(`Running on port ${port}`);
})