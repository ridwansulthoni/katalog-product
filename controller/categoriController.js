const db = require('../config/db');
const response = require('../utils/response');

exports.getAllCategori = (req, res)=> {
    const sql = `SELECT * FROM kategori`;
    db.query(sql, (err,result) =>{
        if (err) throw err
        response(200, result, "get all data kategori", res);
    })
}

exports.addCategori = (req, res)=> {
    const { namaKategori } = req.body;
    const sql = `INSERT INTO kategori (Nama_Kategori)VALUES ('${namaKategori}')`;
    db.query(sql, (err,result) =>{
        if (err) response(500,"Invalid","Error", res);
        if (result?.affectedRows) {
            const data = {
                isSuccess: result.affectedRows,
                id: result.insertId
            }
            response(200, data, "add data success", res);
        }
    })
}

exports.updateCategori = (req, res)=> {
    const { idKategori, namaKategori } = req.body;
    const sql = `UPDATE kategori SET Nama_Kategori = '${namaKategori}' WHERE ID_Kategori = '${idKategori}'`;
    db.query(sql, (err,result) =>{
        if (err) response(500, "Invalid", "Error", res);
        if (result?.affectedRows) {
            const data = {
                isSuccess: result.affectedRows,
                message: result.message,
            }
            response(200, data, "update data success", res);
        } else {
            response(404,"Kategori not found","error",res);
        }
    })
}

exports.deleteCategori =(req, res)=> {
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
}