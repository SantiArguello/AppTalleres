import { Cliente } from "../../utils/interfaces";

const loaderClientes = async ({ request }: { request: Request }) => {
	const { search } = new URL(request.url);
	const hasSearch = search.split("=")[1];

	let response;

	if (hasSearch) {
		response = await fetch(`http://localhost:3000/clientes/buscar${search}`);
	} else {
		response = await fetch("http://localhost:3000/clientes");
	}

	const clientes = await response.json();
	return { clientes } as { clientes: Cliente[] };
};

export default loaderClientes;
