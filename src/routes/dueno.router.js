import { Router } from "express";
import { actualizarDueno, eliminarDueno, listarDueno, registrarDueno } from "../controllers/dueno.controller.js";

const route = Router()

route.get("/listar", listarDueno)
route.post("/registrar", registrarDueno)
route.delete("/eliminar/:id", eliminarDueno)
route.put("/actualizar/:id", actualizarDueno)

export default route