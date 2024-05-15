import express from "express";
import bodyParser from "body-parser";
import mascota from "./src/routes/mascota.router.js";
import dueno from "./src/routes/dueno.router.js"
import raza from "./src/routes/raza.router.js"
import tipo_mascota from "./src/routes/tipo.mascota.router.js"
import { pool } from "./src/database/conexion.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/mascota", mascota);
app.use("/dueno", dueno)
app.use("/raza", raza)
app.use("/tipo", tipo_mascota)

// (async () => {
//   try {
//     await pool.query("SELECT 1");
//     console.log("conexión establecida");
//   } catch (error) {
//     console.log("error", error);
//   }
// })(); 



app.listen(3000, () => {
  console.log("Funcionando en el puerto 3000");
});
