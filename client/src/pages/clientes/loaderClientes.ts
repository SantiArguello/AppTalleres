import { json, redirect, LoaderFunction } from "react-router-dom";
import { Cliente } from "../../utils/interfaces";
import { hadlerErrorNuevoCliente } from "../../utils/handlerErrorNuevoCliente";

// Funcion para traer los clientes
export const getClientes: LoaderFunction = async ({ request }) => {
	// Obtengo el params search para hacer la busqueda del cliente
	// Ejemplo: http://localhost:3000/clientes?search=juan
	const { search } = new URL(request.url);
	// Si hay search, lo separo por = para obtener la palabra de busqueda
	const hasSearch = search.split("=")[1];

	let response;

	// Si tengo palabra de busqueda, pido a la api buscar un cliente por nombre/apellido
	// Sino traigo todos los clientes
	if (hasSearch) {
		response = await fetch(`http://localhost:3000/clientes/buscar${search}`);
	} else {
		response = await fetch("http://localhost:3000/clientes");
	}

	// Convierto la respuesta a json
	const clientes = await response.json();

	// Retorno los clientes
	return { clientes } as { clientes: Cliente[] };
};

// Funcion para crear un nuevo cliente
export const postNuevoCliente: LoaderFunction = async ({ request }) => {
	// Esta funcion me permite traer la info de los inputs del formulario
	const data = await request.formData();

	// Crea body para enviar a la api
	// Uso el metodo get para obtener los datos de los inputs
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

	// Si hay errores, muestro los errores debajo de los inputs
	if (hayErrores) return hayErrores;

	// Envia datos a la api
	const handlePostNuevoCliente = await fetch("http://localhost:3000/cliente", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(nuevoCliente),
	});

	// Convierto la respuesta a json
	const responseData = await handlePostNuevoCliente.json();

	// Si hay errores en la api, retorna los errores
	if (responseData.error) {
		throw json({ message: responseData.message }, { status: 400 });
	}

	// Si no hay errores, redirecciono a la pagina de clientes
	return redirect("/clientes");
};

// Funcion para traer los clientes
export const getDetalleCliente: LoaderFunction = async ({ params }) => {
	// Obtengo el id del cliente
	const { id } = params;

	// Si no hay id, redirecciono a la pagina de clientes
	if (!id) redirect("/clientes");

	// Get detalle del cliente
	const response = await fetch(`http://localhost:3000/cliente/${id}`);
	const cliente = await response.json();

	return { cliente } as { cliente: Cliente };
};

export const actionDetalleCliente: LoaderFunction = async ({ request, params }) => {
	switch (request.method) {
		case "PUT": {
			// let formData = await request.formData();
			// let name = formData.get("projectName");
			// return actualizarCliente(name);
			console.log("Editar Cliente");
			return true;
		}
		case "DELETE": {
			if (window.confirm("Desea eliminar el cliente?")) {
				const deletedUser = await fetchDeleteUser(params.id);
				window.alert(deletedUser.message);
				return redirect(`/clientes/`);
			} else {
				return redirect(`/clientes/detalle/${params.id}`);
			}
			break;
		}
		default: {
			return false;
		}
	}
};

const fetchDeleteUser = async (id?: string) => {
	const response = await fetch(`http://localhost:3000/cliente/${id}`, {
		method: "DELETE",
	});
	return await response.json();
};
