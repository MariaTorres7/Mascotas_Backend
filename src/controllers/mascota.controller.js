import { pool } from "../database/conexion.js";


export const listarMascota = async (req, res) => {
    try {
        let sql = "SELECT * FROM mascotas"

        let [result] = await pool.query(sql)

        if (result.length > 0) {
            res.status(200).json(result)
        }
        else {
            res.status(404).json({ "Mensaje": "No se encontraron mascotas" })
        }

    } catch (error) {
        console.log(error)
    }
}


export const registrarMascota = async (req, res) => {
    try {

        let {nombre, tipo, raza, dueno} = req.body
        const sql = "INSERT INTO mascotas (nombre_mascota, fk_tipo_mascota, fk_raza, fk_dueno)  VALUES (?, ?, ?, ?)"
        await pool.query(sql,[nombre, tipo, raza, dueno])
        res.status(201).json({ success: true, message: "Mascota registrada con éxito"});
      
        }
    catch (error) {
        return res.status(500).json({ 'message': 'Error' + error})
    }
}


export const eliminarMascota  = async (req, res) => {

    try {

        const id = req.params.id
        const query = 'DELETE FROM mascotas WHERE id_mascota = ?'
        
        const [result] = await pool.query(query, [id])


        return res.status(200).json({"message": "Mascota eliminada"})
        
    } catch (e) {
        console.error('Error', e)
        return res.status(500).json ({"message": "Error en el servidor"})
    }
}


export const actualizarMascota = async (req, res) => {

    try {
        
    let {nombre, tipo, raza, dueno} =req.body

    const id = req.params.id 
    let sql = `UPDATE mascotas SET nombre_mascota = '${nombre}', fk_tipo_mascota = '${tipo}', fk_raza = '${raza}', fk_dueno = '${dueno}'`
    let [result] = await pool.query(sql)


    if (result.affectedRows > 0) {
        res.status(200).json({"message": "Se actualizó la mascota"})
        
    }
    } catch (error) {
        return res.status(500).json({"mesagge": "Error del servidor"})
    }
}