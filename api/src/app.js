const express = require("express");
const connectToDatabase = require("./libs/db-connection");
const morgan = require("morgan");
const cors = require('cors');
const app = express();

// Conectar a la base de datos
connectToDatabase();
// Configurar middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(
    cors({
         origin: '*'
     })
 )


// Importar y usar tus rutas centralizadas desde routes/index.js
const routes = require("./routes");

app.use("/", routes);

module.exports = app;