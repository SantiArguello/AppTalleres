type nuevoCliente = {
	nombre: FormDataEntryValue | null;
	apellido: FormDataEntryValue | null;
	correo: FormDataEntryValue | null;
	telefono: FormDataEntryValue | null;
	moto: {
		modelo: FormDataEntryValue | null;
		kilometros: FormDataEntryValue | null;
		año: FormDataEntryValue | null;
	};
};

export const hadlerErrorNuevoCliente = (nuevoCliente: nuevoCliente) => {
	if (!nuevoCliente.nombre?.length) return { errorNombre: "Nombre requerido" };
	if (!nuevoCliente.apellido?.length) return { errorApellido: "Apellido requerido" };
	if (!nuevoCliente.telefono) return { errorTelefono: "Telefono requerido" };
	if (!nuevoCliente.correo?.length) return { errorCorreo: "Correo requerido" };
	if (!nuevoCliente.moto?.modelo?.length) return { errorModelo: "Modelo requerido" };
	if (!nuevoCliente.moto?.kilometros?.length) return { error: "Kilometros requerido" };
	if (!nuevoCliente.moto?.año?.length) return { error: "Año requerido" };
	return false;
};
