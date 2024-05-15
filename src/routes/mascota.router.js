import { Router } from "express";
import { actualizarMascota, eliminarMascota, listarMascota, registrarMascota } from "../controllers/mascota.controller.js";


const route = Router()

route.get("/listar", listarMascota)
route.post("/registrar", registrarMascota)
route.delete("/eliminar/:id", eliminarMascota)
route.put("/actualizar/:id", actualizarMascota)


export default route