const express = require('express');
const connectToDatabase = require('./libs/db-connection');
const morgan = require("morgan")


const clientes = require('./routes/clientes');
const motos = require('./routes/moto')
const trabajoFiltrado = require('./routes/trabajoFiltrado')
const repuestosInsumos = require('./routes/repuestosInsumos')
const service = require('./routes/service')

// Importar más rutas si las tienes


const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectToDatabase();

// Configurar middlewares y rutas
app.use(express.json());
app.use(morgan("dev"))

// Usar tus rutas
app.use('/clientes', clientes);
app.use('/motos', motos)
app.use('/trabajoFiltrado', trabajoFiltrado)
app.use('/repuestosInsumos', repuestosInsumos)
app.use('/service', service)
// Agregar más rutas aquí si las tienes

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});