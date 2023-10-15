import { redirect, LoaderFunction } from "react-router-dom";
import { Cliente } from "../utils/interfaces";
import { hadlerErrorNuevoCliente } from "../utils/handlerErrorNuevoCliente";
import { fetchDelete, fetchGet, fetchPost } from "./fetchData";

// Función para traer los clientes
export const getClientes: LoaderFunction = async ({ request }) => {
	const buscarPorNombre = new URL(request.url).searchParams.get("search");

	const apiUrl = buscarPorNombre ? `clientes/buscar?search=${buscarPorNombre}` : "clientes";
	const clientes = await fetchGet(apiUrl);

	return { clientes: clientes.data };
};

// Función para crear un nuevo cliente
export const postNuevoCliente: LoaderFunction = async ({ request }) => {
	const formData = await request.formData();

	const nuevoCliente = {
		nombre: formData.get("nombre"),
		apellido: formData.get("apellido"),
		correo: formData.get("correo"),
		telefono: formData.get("telefono"),
		moto: {
			modelo: formData.get("moto"),
			kilometros: formData.get("kilometros"),
			año: formData.get("año"),
		},
	};

	const hayErrores = hadlerErrorNuevoCliente(nuevoCliente);

	if (hayErrores) return hayErrores;

	await fetchPost("cliente", nuevoCliente);

	window.alert("Cliente creado correctamente");

	return redirect("/clientes");
};

// Función para traer los clientes
export const getDetalleCliente: LoaderFunction = async ({ params }) => {
	const { id } = params;

	if (!id) return redirect("/clientes");

	const { data } = await fetchGet(`cliente/${id}`);

	return { cliente: data } as { cliente: Cliente };
};

// Función para editar o eliminar un cliente
export const actionDetalleCliente: LoaderFunction = async ({ request, params }) => {
	switch (request.method) {
		case "PUT":
			console.log("Editar Cliente");
			return true;

		case "DELETE":
			if (window.confirm("¿Desea eliminar el cliente?")) {
				const clienteEliminado = await fetchDelete(`cliente/${params.id}`);
				window.alert(clienteEliminado.data.message);
				return redirect("/clientes/");
			}
			return redirect(`/clientes/detalle/${params.id}`);

		default:
			return false;
	}
};
