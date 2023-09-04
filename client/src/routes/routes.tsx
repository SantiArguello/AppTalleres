import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { ErrorNotFound } from "../components";
import { Clientes, Dashboard, Trabajos, Calendario, Facturacion, Notificaciones, Estadisticas, Login, Signup } from "../pages";
import App from "../App";

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
