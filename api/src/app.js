const express = require("express");
const connectToDatabase = require("./libs/db-connection");
const morgan = require("morgan");

const clientes = require("./routes/clientes");
const motos = require("./routes/moto");
const trabajoFiltrado = require("./routes/trabajoFiltrado");
const repuestosInsumos = require("./routes/repuestosInsumos");
const service = require("./routes/service");
const agenda = require("./routes/agenda");
const motoFiltrado = require("./routes/motoFiltrado");

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectToDatabase();

// Configurar middlewares y rutas
app.use(express.json());
app.use(morgan("dev"));

// Usar tus rutas
app.use("/", clientes);
app.use("/", trabajoFiltrado);
app.use("/", repuestosInsumos);
app.use("/", service);
app.use("/", agenda);
app.use("/", motoFiltrado);
app.use("/", motos);

// Iniciar el servidor
app.listen(PORT, () => {
	console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
