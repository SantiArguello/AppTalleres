const express = require('express');
const connectToDatabase = require('./libs/db-connection');
const morgan = require("morgan")


const clientes = require('./routes/clientes');
const motos = require('./routes/moto')
const agenda = require('./routes/agenda')
// Importar más rutas si las tienes


const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectToDatabase();

// Configurar middlewares y rutas
app.use(express.json());
app.use(morgan("dev"))

// Usar tus rutas
app.use('/', clientes);
// Agregar más rutas aquí si las tienes
app.use('/', motos)
app.use('/', agenda)

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});