const express = require("express");
const connectToDatabase = require("./libs/db-connection");
const morgan = require("morgan");
const cors = require('cors');
const path = require('path');
const app = express();

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "AppTalleres API",
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:3000",
            }
        ]
    },
    apis: [
        path.join(__dirname, "./routes/cliente/doc.js"),
        path.join(__dirname, "./routes/moto/doc.js"),
        path.join(__dirname, "./routes/agenda/doc.js"),
        path.join(__dirname, "./routes/estadistica/doc.js")
        
        // Agrega más rutas de documentación de Swagger según sea necesario
      ],
};


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
 app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerSpec)));


// Importar y usar tus rutas centralizadas desde routes/index.js
const routes = require("./routes");

app.use("/", routes);
app.get("/", (req, res) => { 
    res.send("Welcome to AppTalleres API");

});

module.exports = app;