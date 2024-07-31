const db = require('../config/db');
const response = require('../utils/response');

exports.getAllBrand = (req, res)=> {
    const sql = `SELECT * FROM merek`;
    db.query(sql, (err, result)=> {
        if (err) throw err
        response(200, result, "get all data merek", res);
    })
}

exports.addBrand = (req, res)=> {
    const { namaMerek } = req.body
    const sql = `INSERT INTO merek (Nama_Merek) VALUES ('${namaMerek}')`;
    db.query(sql, (err, result)=> {
        if (err) response (500, "Invalid", "Error", res)
        if (result?.affectedRows) {
            const data = {
                isSuccess: result.affectedRows,
                id: result.insertId
            } 
            response(200, data, "Add Data Success", res)
        } else {
            response(404, "Failed to add data", "Error", res)
        }
    })
}

exports.updateBrand = (req, res)=> {
    const { idMerek, namaMerek} = req.body
    const sql = `UPDATE merek SET Nama_Merek = '${namaMerek}' WHERE ID_Merek = '${idMerek}'`
    db.query(sql, (err, result)=> {
        if (err) response(500, "Invalid", "Error", res)
        if (result?.affectedRows) {
            const data = {
                isSuccess : result.affectedRows,
                message : result.message
            }
            response(200, data, "Get all data merek", res);
        } else {
            response(404, "Merek not found", "Error", res)
        }
        
    })
}

exports.deleteBrand = (req, res)=> {
    const { idMerek } = req.body
    const sql = `DELETE FROM merek WHERE ID_Merek = '${idMerek}'`
    db.query(sql, (err, result)=> {
        if (err) response(500, "Invalid", "Error", res)
        if (result?.affectedRows) {
            const data = {
                idDeleted : result.affectedRows
            }
            response(200, data, "Delete data Success", res);
        } else {
            response(404, "Merek not found", "Error", res)
        }
    })
}