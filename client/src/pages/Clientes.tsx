import { NavLink, useLoaderData, Form, useNavigation } from "react-router-dom";
import { MdPersonSearch } from "react-icons/md";
import { LuLoader2 } from "react-icons/lu";
import { IconContext } from "react-icons";
import { Cliente } from "../utils/interfaces";
import { ClientCard, ClientSkeleton } from "../components";

const Clientes = () => {
	const { clientes } = useLoaderData() as { clientes: Cliente[] };
	const navigation = useNavigation();

	return (
		<>
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-xl font-bold">Clientes</h2>

				{/* BARRA BUSQUEDA */}

				<div className="hidden md:block">
					<Form className="mt-1 flex rounded-md shadow-sm" role="search">
						<div className="relative flex">
							<input
								className="ps-3 -green-900 outline-none focus:ring-1 focus-visible:ring-green-500 focus:ring-green-500 block w-full rounded-none rounded-l-md sm:text-sm bg-inherit placeholder:text-neutral-400"
								type="search"
								name="search"
								aria-label="Buscar cliente"
								placeholder="Buscar cliente"
							/>
						</div>
						<button
							type="submit"
							className="-ml-px inline-flex items-center space-x-2 px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-sm font-medium rounded-r-md hover:bg-neutral-100 dark:hover:bg-neutral-600 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
							{navigation.state === "loading" && navigation.location.search ? (
								<IconContext.Provider value={{ className: "animate-spin" }}>
									<LuLoader2 size={"1.25rem"} color={"gray"} />
								</IconContext.Provider>
							) : (
								<MdPersonSearch size={"1.25rem"} />
							)}
						</button>
					</Form>
				</div>

				{/* Boton Crear Cliente */}

				<NavLink
					type="button"
					to="/clientes/crear"
					className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-neutral-50 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
					Crear Cliente
				</NavLink>
			</div>

			{/* LISTA CLIENTES */}

			<div className="bg-neutral-100 dark:bg-neutral-800 shadow overflow-hidden sm:rounded-md">
				<ul role="list" className="divide-y divide-neutral-200 dark:divide-neutral-700">
					{navigation.state === "loading" ? (
						<ClientSkeleton />
					) : clientes.length ? (
						clientes.map((client) => (
							<li key={client.correo}>
								<ClientCard client={client} />
							</li>
						))
					) : (
						<div className="text-center mt-4 mb-4 font-semibold text-lg">No se encontraron clientes</div>
					)}
				</ul>
			</div>
		</>
	);
};

// Obtiene los clientes de la API
export const loaderClientes = async ({ request }) => {
	const { search } = new URL(request.url);
	const hasSearch = search.split("=")[1];

	let response;

	if (hasSearch) {
		response = await fetch(`http://localhost:3000/clientes/buscar${search}`);
	} else {
		response = await fetch("http://localhost:3000/clientes");
	}

	const clientes = await response.json();
	return { clientes };
};

export default Clientes;
