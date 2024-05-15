import { pool } from "../database/conexion.js";


export const listarTipoMascota = async (req, res) => {
    try {
        let sql = "SELECT * FROM razas"
        let [result] = await pool.query(sql)

        if (result.length >0 ) {
            res.status(201).json(result)
        }
        else {
            res.status(404).json({"mensaje": "No se encontaron tipos de mascota"})  
        }
    } catch (error) {
        console.log(error)
    }
}

export const registrarTipoMascota = async (req, res) => {
    try {
        let {tipo} = req.body 
        const sql = "INSERT INTO tipo_mascotas (nombre_tipo) VALUES (?)"
        await pool.query(sql,[tipo])
        res.status(201).json({success: true, message: "Tipo de mascota registrado con éxito"})

    } catch (error) {
        return res.status(500).json({ 'message': 'Error' + error})
    }
}

export const eliminarTipoMascota = async (req, res) => {
    try {
        const id = req.params.id
        let sql = "DELETE FROM tipo_mascota WHERE id_tipo =?"
        const [result] = await pool.query(sql, [id])
        return res.status(200).json ({"mensaje": "Tipo de mascota eliminada"})

    } catch (error) {
        console.error('Error', e)
        return res.status(500).json ({"message": "Error en el servidor"})
    }
}

export const actualizarTipoMascota = async (req, res) => {
    try {
        let {tipo} = req.body
        const id = req.params.id
        let sql = `UPDATE tipo_mascotas SET nombre_tipo = '${tipo}`
        let [result] = await pool.query(sql)

        if (result.affectedRows >0) {
            res.status(200).json({"message": "Se actualizó el tipo de mascota"})
        }
    } catch (error) {
        return res.status(500).json({"mesagge": "Error del servidor"})
    
    }
}