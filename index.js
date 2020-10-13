const express = require("express");
require("dotenv").config();
const cors = require("cors");

const { dbConnection } = require("./db/config");

//Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

//CORS
app.use(cors());

// Directorio Publico

app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth")); //login , register and renew (token)
app.use("/api/events", require("./routes/events")); //CRUD  de la app

//Escuchar peticiones
app.listen(4000, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
