import { Router } from "express";
import { actualizarTipoMascota, eliminarTipoMascota, listarTipoMascota, registrarTipoMascota } from "../controllers/tipo.mascota.controller.js";


const route = Router()

route.get("/listar", listarTipoMascota)
route.post("/registrar", registrarTipoMascota)
route.delete("/eliminar/:id", eliminarTipoMascota)
route.put("/actualizar", actualizarTipoMascota)

export default route