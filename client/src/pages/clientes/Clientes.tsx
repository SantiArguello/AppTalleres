import { NavLink, useLoaderData } from "react-router-dom";
import { Cliente } from "../../utils/interfaces";
import { ClientSearchBar, ClientList } from "./";

const Clientes = () => {
	const { clientes } = useLoaderData() as { clientes: Cliente[] };

	return (
		<>
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-xl font-bold">Clientes</h2>

				{/* BARRA DE BÚSQUEDA */}
				<ClientSearchBar />

				{/* BOTON CREAR CLIENTE */}
				<NavLink
					type="button"
					to="/clientes/crear"
					className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-neutral-50 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
					Crear Cliente
				</NavLink>
			</div>

			{/* LISTA DE CLIENTES */}
			<ClientList clientes={clientes} />
		</>
	);
};

export default Clientes;
