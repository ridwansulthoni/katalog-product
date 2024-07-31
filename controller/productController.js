const db = require('../config/db');
const response = require('../utils/response');

exports.getAllProduct = (req, res) => {
    const sql = `SELECT * FROM produk`
    db.query(sql, (err, result)=> {
        if (err) throw err;
        response(200, result, "get all data product", res);
    })
}

exports.addProduct = (req, res) => {
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
}

exports.updateProduct = (req, res) => {
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
}

exports.deleteProduct = (req, res) => {
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
}