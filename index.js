const express = require("express");
require("dotenv").config();

//Crear el servidor de express
const app = express();

// Directorio Publico

app.use(express.static("public"));

// Rutas
app.use("/api/auth", require("./routes/auth"));

//Escuchar peticiones
app.listen(4000, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
