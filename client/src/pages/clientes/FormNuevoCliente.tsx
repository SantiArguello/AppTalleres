import { useEffect, useState } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { ErrorFormNuevoCliente, Modelo } from "../../utils/interfaces";

const FormNuevoCliente = () => {
	// State para guardar los modelos de motos a elegir
	const [modeloMotos, setModeloMotos] = useState([] as Modelo[]);

	// Comprobacion de erorres de inputs
	const errorMessages = useActionData() as ErrorFormNuevoCliente;

	// Para redirigir
	const navigate = useNavigate();

	// Get MotoFiltrado para guardar los modelos y ordenarlos alfabeticamente
	useEffect(() => {
		fetch("http://localhost:3000/motoFiltrado")
			.then((response) => response.json())
			.then((res) => {
				const motosOrdenadas: Modelo[] = res.sort((a: Modelo, b: Modelo) => a.modelo.localeCompare(b.modelo));
				setModeloMotos(motosOrdenadas);
			});
	}, []);

	return (
		<Form method="post" className="space-y-8 lg:mx-5 divide-y divide-neutral-200 dark:divide-neutral-600">
			<div>
				<div className="pt-2">
					<div>
						<h2 className="text-xl font-bold">Crear nuevo cliente</h2>
					</div>

					<div className="sm:col-span-6 mt-6 ">
						<h3 className="text-xl">Datos del cliente</h3>
					</div>

					<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label htmlFor="nombre" className="block text-sm font-medium">
								Nombre
							</label>
							<div className="mt-1 relative rounded-md shadow-sm">
								<input
									type="text"
									name="nombre"
									id="nombre"
									className=" w-full dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
									placeholder="Juan"
									aria-invalid="true"
									aria-describedby="nombre-error"
								/>
							</div>
							{errorMessages?.errorNombre && <p className="mt-2 text-sm text-red-600">{errorMessages.errorNombre}</p>}
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="apellido" className="block text-sm font-medium">
								Apellido
							</label>
							<div className="mt-1 relative rounded-md shadow-sm">
								<input
									type="text"
									name="apellido"
									id="apellido"
									className=" w-full dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
									placeholder="Perez"
									aria-invalid="true"
									aria-describedby="apellido-error"
								/>
							</div>
							{errorMessages?.errorApellido && <p className="mt-2 text-sm text-red-600">{errorMessages.errorApellido}</p>}
						</div>

						<div className="sm:col-span-3">
							<div className="flex justify-between">
								<label htmlFor="correo" className="block text-sm font-medium">
									Email
								</label>
							</div>
							<div className="mt-1 relative rounded-md shadow-sm">
								<input
									type="email"
									name="correo"
									id="correo"
									className=" w-full dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
									placeholder="juan-perez@email.com"
									aria-invalid="true"
								/>
							</div>
							{errorMessages?.errorCorreo && <p className="mt-2 text-sm text-red-600">{errorMessages.errorCorreo}</p>}
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="telefono" className="block text-sm font-medium">
								Telefono
							</label>
							<div className="mt-1 relative rounded-md shadow-sm">
								<input
									type="number"
									name="telefono"
									id="telefono"
									required
									className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
									placeholder="351 123 4567"
									aria-invalid="true"
									aria-describedby="telefono-error"
								/>
							</div>
							{errorMessages?.errorTelefono && <p className="mt-2 text-sm text-red-600">{errorMessages.errorTelefono}</p>}
						</div>
					</div>
				</div>
			</div>
			<div className="pt-3">
				<div>
					<h3 className="text-xl">Datos de la moto</h3>
				</div>

				<div className="pt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
					<div className="sm:col-span-2">
						<label htmlFor="moto" className="block text-sm font-medium ">
							Modelo
						</label>
						<select
							id="moto"
							name="moto"
							required
							className=" mt-1 dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md">
							{modeloMotos.map((moto) => (
								<option key={moto._id} value={moto._id}>
									{moto.modelo}
								</option>
							))}
						</select>
					</div>

					<div className="sm:col-span-2">
						<label htmlFor="kilometros" className="block text-sm font-medium">
							Kilometros
						</label>
						<div className="mt-1">
							<input
								type="number"
								name="kilometros"
								id="kilometros"
								placeholder="5000"
								min="0"
								required
								autoComplete="kilometros"
								className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
							/>
						</div>
						{errorMessages?.errorKilometros && <p className="mt-2 text-sm text-red-600">{errorMessages.errorKilometros}</p>}
					</div>

					<div className="sm:col-span-2">
						<label htmlFor="año" className="block text-sm font-medium">
							Año
						</label>
						<div className="mt-1">
							<input
								type="number"
								name="año"
								id="año"
								placeholder="2019"
								min="1960"
								max={new Date().getFullYear()}
								required
								className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
							/>
						</div>
						{errorMessages?.errorAño && <p className="mt-2 text-sm text-red-600">{errorMessages.errorAño}</p>}
					</div>
				</div>
			</div>
			<div className="pt-5">
				<div className="flex justify-end">
					<button
						type="button"
						onClick={() => navigate(-1)}
						className="ml-5 bg-neutral-300 dark:bg-neutral-600 text-neutral-800 py-2 px-3 rounded-md shadow-sm text-sm leading-4 font-medium dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-500 outline-none border-none focus:ring-2 focus:ring-green-500">
						Cancelar
					</button>
					<button
						type="submit"
						className="ml-5 bg-green-700 py-2 px-3 rounded-md shadow-sm text-sm leading-4 font-medium text-neutral-100 hover:bg-green-800 outline-none border-none focus:ring-2 focus:ring-green-500">
						Guardar
					</button>
				</div>
			</div>
		</Form>
	);
};

export default FormNuevoCliente;
