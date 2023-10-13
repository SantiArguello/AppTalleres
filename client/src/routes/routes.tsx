import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { ErrorNotFound, ErrorHandler } from "../components";
import NuevoService from "../pages/trabajos/NuevoService";
import { Clientes, Dashboard, Trabajos, Calendario, Facturacion, Notificaciones, Estadisticas, Login, Signup } from "../pages";
import {
	postNuevoCliente,
	FormNuevoCliente,
	ClienteDetalle,
	getClientes,
	getDetalleCliente,
	actionDetalleCliente,
} from "../pages/clientes";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorNotFound />,
		children: [
			{
				errorElement: <ErrorHandler />,
				children: [
					{
						path: "/",
						index: true,
						element: <Dashboard />,
					},
					{
						path: "dashboard",
						element: <Dashboard />,
					},
					{
						path: "trabajos",
						element: <Trabajos />,
					},
					{
						path: "calendario",
						element: <Calendario />,
					},
					{
						path: "clientes",
						element: <Clientes />,
						loader: getClientes,
					},
					{
						path: "clientes/crear",
						element: <FormNuevoCliente />,
						action: postNuevoCliente,
					},
					{
						path: "clientes/detalle/:id",
						element: <ClienteDetalle />,
						loader: getDetalleCliente,
						action: actionDetalleCliente,
					},
					{
						path: "facturacion",
						element: <Facturacion />,
					},
					{
						path: "notificaciones",
						element: <Notificaciones />,
					},
					{
						path: "estadisticas",
						element: <Estadisticas />,
					},
					{
						path: "/nuevo-service",
						element: <NuevoService />,
					},
				],
			},
		],
	},
]);

export default router;
