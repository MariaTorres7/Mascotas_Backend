import { pool } from '../database/conexion.js'


export const listarDueno = async (req, res) => {
    try {
        let sql = "SELECT * FROM duenos"

        let [result] = await pool.query(sql)

        if (result.length >0 ) {
            res.status(200).json(result)
        }
        else {
            res.status(404).json({"Mensaje": "No se encontraron dueños"})
        }
        
    } catch (error) {
        console.log(error)
        
    }
}

export const registrarDueno = async (req, res) => {
    try {
        let {nombre} = req.body 
        const sql = "INSERT INTO duenos (nombre_dueno) VALUES (?)"
        await pool.query(sql,[nombre])
        res.estatus(201).json({success: true, message: "Dueño registrado éxitosamente "})   

    } catch (error) {
        return res.status(500).json ({'message': 'Error' + error})
        
    }
}

export const eliminarDueno = async (req, res) => {
    try {
        const id = req.params.id
        const query = 'DELETE FROM duenos WHERE id_dueno =?'
        const [result] = await pool.query(query, [id])

        return res.status(201).json ({"message": "Dueño eliminado"})

    } catch (error) {
        return res.status(500).json ({"message": "Error en el servidor"})
        
    }
}

export const actualizarDueno = async (req, res) => {
    try {
        let {nombre} = req.body 
        const sql = `UPDATE duenos SET nombre_dueno = '${nombre}'`
        let [result] = await pool.query(sql)

        if (result.affectedRows > 0) {
            res.status(201).json ({"message": "Se actualizó el dueño"})
        }
    } catch (error) {
        return res.status(500).json ({"message": "Error del servidor"})
    }
}