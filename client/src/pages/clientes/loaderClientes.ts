import { json, redirect } from "react-router-dom";
import { Cliente } from "../../utils/interfaces";
import { hadlerErrorNuevoCliente } from "../../utils/handlerErrorNuevoCliente";

// Funcion para traer los clientes
export const getClientes = async ({ request }: { request: Request }) => {
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

// Funcion para crear un nuevo cliente
export const postNuevoCliente = async ({ request }: { request: Request }) => {
	const data = await request.formData();

	// Crea body para enviar a la api
	const nuevoCliente = {
		nombre: data.get("nombre"),
		apellido: data.get("apellido"),
		correo: data.get("correo"),
		telefono: data.get("telefono"),
		moto: {
			modelo: data.get("moto"),
			kilometros: data.get("kilometros"),
			año: data.get("año"),
		},
	};

	// Valida que los campos no esten vacios
	const hayErrores = hadlerErrorNuevoCliente(nuevoCliente);

	if (hayErrores) return hayErrores;

	// Envia datos a la api
	const handlePostNuevoCliente = await fetch("http://localhost:3000/cliente", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(nuevoCliente),
	});

	const responseData = await handlePostNuevoCliente.json();

	// Si hay errores en la api, retorna los errores
	if (responseData.error) {
		throw json({ message: responseData.message }, { status: 400 });
	}

	return redirect("/clientes");
};
