import { pool } from "../database/conexion.js";

export const listarRaza = async (req, res) => {
    try {
        let sql = "SELECT * FROM razas"
        let [result] = await pool.query(sql)

        if (result.length >0) {
            res.status(201).json(result)
        }
        else {
            res.status(404).json({"Mensaje": "Nose encontraron razas"})

        }
    } catch (error) {
        console.log(error)
        
    }
}

export const registrarRaza = async (req, res) => {
    try {
        let {nombre} = req.body
        const sql = "INSERT INTO razas (nombre) VALUES (?)"
        await pool.query (sql,[nombre])
        res.status(201).json({success: true, message: "Raza registrada con éxito"})
    } 
    catch (error) {
        return res.status(500).json({ 'message': 'Error' + error})
    }
}

export const eliminarRaza = async (req, res) => {
    try {
        const id = req.params.id
        let sql = 'DELETE FROM razas WHERE id_raza = ?'
        const [result] = await pool.query(sql, [id])

        return res.status(201).json ({"mensaje": "Raza eliminada"})


    } catch (error) {
        console.error('Error', error)
        return res.status(500).json ({"mensaje": "Error del servidor"})
    }
}

export const actualizarRaza = async (req, res) => {
    try {
        let {nombre} = req.body
        const id = req.params.id
        let sql = `UPDATE razas SET nombre_raza = '${nombre}'`
        let [result] = await pool.query(sql)

        if (result.length > 0 ) {
            res.status(201).json({"mensaje": "Se actualizó la raza"})
        }

    } 
    catch (error) {
        return res.status(500).json ({"mensaje": "Error del servidor"})
    }
}
