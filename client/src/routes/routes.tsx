import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { ErrorNotFound } from "../components";
import { Clientes, Dashboard, Trabajos, Calendario, Facturacion, Notificaciones, Estadisticas } from "../pages";
import App from "../App";

const router = createBrowserRouter([
	{
		path: "/signin",
		element: (
			<div>
				<h1>signin</h1>
			</div>
		),
	},
	{
		path: "/signup",
		element: (
			<div>
				<h1>signin</h1>
			</div>
		),
	},
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorNotFound />,
		children: [
			{
				path: "/",
				index: true,
				element: <App />,
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
			},
			{
				path: "/facturacion",
				element: <Facturacion />,
			},
			{
				path: "/notificaciones",
				element: <Notificaciones />,
			},
			{
				path: "/estadisticas",
				element: <Estadisticas />,
			},
		],
	},
]);

export default router;
