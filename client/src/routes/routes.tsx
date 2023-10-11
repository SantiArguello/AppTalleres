import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { ErrorNotFound } from "../components";
import { FormNuevoCliente } from "../pages/clientes";
import { Clientes, Dashboard, Trabajos, Calendario, Facturacion, Notificaciones, Estadisticas, Login, Signup } from "../pages";
import { loaderClientes } from "../pages/clientes";

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
				loader: loaderClientes,
				errorElement: <h1 className="text-center">No se encontro clientes</h1>,
			},
			{
				path: "clientes/crear",
				element: <FormNuevoCliente />,
			},
			{
				path: "clientes/:clientId",
				element: <h1>Cliente Details</h1>,
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
		],
	},
]);

export default router;
