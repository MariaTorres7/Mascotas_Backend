import { Router } from "express";
import { actualizarRaza, eliminarRaza, listarRaza, registrarRaza } from "../controllers/raza.controller.js";

const route = Router()

route.get("/listar", listarRaza)
route.post("/registar", registrarRaza)
route.delete("/eliminar/:id", eliminarRaza)
route.put("/actualizar/:id", actualizarRaza)

export default route