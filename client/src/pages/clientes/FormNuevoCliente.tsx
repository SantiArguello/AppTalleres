import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modelo } from "../../utils/interfaces";

const FormNuevoCliente = () => {
	const [modeloMotos, setModeloMotos] = useState([] as Modelo[]);

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("http://localhost:3000/motoFiltrado")
			.then(({ data }: { data: Modelo[] }) => setModeloMotos(data.sort((a, b) => a.modelo.localeCompare(b.modelo))));
	}, []);

	return (
		<form className="space-y-8 lg:mx-5 divide-y divide-neutral-200 dark:divide-neutral-600">
			<div>
				<div className="pt-2">
					<div>
						<h2 className="text-xl font-bold">Crear nuevo cliente</h2>
					</div>

					{/* Foto Perfil */}

					<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
						<div className="sm:col-span-6">
							<h3 className="text-xl">Datos del cliente</h3>
						</div>
						<div className="sm:col-span-6">
							<label htmlFor="photo" className="block text-sm font-medium">
								Foto Perfil
							</label>
							<div className="mt-1 flex items-center pt-2">
								<span className="h-12 w-12 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-700">
									<svg className="h-full w-full text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
										<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
									</svg>
								</span>
								<button
									type="button"
									className="ml-5 bg-green-700 py-2 px-3 rounded-md shadow-sm text-sm leading-4 font-medium text-neutral-100 hover:bg-green-800 outline-none border-none focus:ring-2 focus:ring-green-500">
									Elegir
								</button>
							</div>
						</div>
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
									// className="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
									className=" w-full dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
									placeholder="Juan"
									aria-invalid="true"
									aria-describedby="nombre-error"
								/>
							</div>
							{/* <p className="mt-2 text-sm text-red-600" id="nombre-error">
								Debe contener el nombre del cliente.
							</p> */}
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
									// className="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
									className=" w-full dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
									placeholder="Perez"
									aria-invalid="true"
									aria-describedby="apellido-error"
								/>
							</div>
							{/* <p className="mt-2 text-sm text-red-600" id="apellido-error">
								Debe contener el apellido del cliente.
							</p> */}
						</div>

						<div className="sm:col-span-3">
							<div className="flex justify-between">
								<label htmlFor="email" className="block text-sm font-medium">
									Email
								</label>
								<span className="text-sm text-gray-500" id="email-optional">
									Opcional
								</span>
							</div>
							<div className="mt-1 relative rounded-md shadow-sm">
								<input
									type="email"
									name="email"
									id="email"
									// className="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
									className=" w-full dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
									placeholder="juan-perez@email.com"
									aria-invalid="true"
									aria-describedby="email-error"
								/>
							</div>
							{/* <p className="mt-2 text-sm text-red-600" id="email-error">
								Debe ser un email válido.
							</p> */}
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="telefono" className="block text-sm font-medium">
								Telefono
							</label>
							<div className="mt-1 relative rounded-md shadow-sm">
								<input
									type="text"
									name="telefono"
									id="telefono"
									// className="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
									className=" w-full dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
									placeholder="351 123 4567"
									aria-invalid="true"
									aria-describedby="telefono-error"
								/>
							</div>
							{/* <p className="mt-2 text-sm text-red-600" id="telefono-error">
								Debe ser un teléfono válido.
							</p> */}
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
								autoComplete="kilometros"
								className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
							/>
						</div>
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
								autoComplete="año"
								className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
							/>
						</div>
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
		</form>
	);
};

export default FormNuevoCliente;
