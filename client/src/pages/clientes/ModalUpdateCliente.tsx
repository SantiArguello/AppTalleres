import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { fetchGet } from "../../services/fetchData";
import { Modelo } from "../../utils/interfaces";

const ModalUpdateCliente = ({ showUpdateModal, setShowUpdateModal, cliente }) => {
	const [modeloMotos, setModeloMotos] = useState([] as Modelo[]);

	// Get MotoFiltrado para guardar los modelos y ordenarlos alfabeticamente
	useEffect(() => {
		fetchGet("motoFiltrado").then((res) => {
			const motosOrdenadas: Modelo[] = res.data.sort((a: Modelo, b: Modelo) => a.modelo.localeCompare(b.modelo));
			setModeloMotos(motosOrdenadas);
		});
	}, []);

	return (
		<>
			{/* Fondo negro */}
			<div
				className="hidden sm:block fixed z-10 inset-0 bg-neutral-900 bg-opacity-90 backdrop-blur-sm"
				onClick={() => setShowUpdateModal(false)}
			/>

			<div
				className={`fixed ${
					showUpdateModal && "h-screen sm:h-auto overflow-y-scroll sm:overflow-hidden"
				} mx-auto inset-0 z-20 max-w-2xl bg-neutral-50 dark:bg-neutral-800 min-h-max sm:top-32 sm:rounded-md`}>
				<section className="flex p-4 items-center justify-center sm:p-0 sm:m-10 ">
					<Form method="PUT" className="w-full">
						<h3 className="text-3xl font-bold ">Editar Cliente</h3>
						<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="nombre" className="block text-sm font-medium">
									Nombre
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<input
										type="text"
										name="nombre"
										id="nombre"
										className=" w-full dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
										placeholder={cliente.nombre}
										defaultValue={cliente.nombre}
										aria-invalid="true"
										aria-describedby="nombre-error"
										required
									/>
								</div>
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label htmlFor="apellido" className="block text-sm font-medium">
									Apellido
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<input
										type="text"
										name="apellido"
										id="apellido"
										className=" w-full dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
										placeholder={cliente.apellido}
										defaultValue={cliente.apellido}
										required
										aria-invalid="true"
										aria-describedby="apellido-error"
									/>
								</div>
							</div>

							<div className="col-span-6 sm:col-span-3">
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
										placeholder={cliente.correo}
										defaultValue={cliente.correo}
										aria-invalid="true"
									/>
								</div>
							</div>

							<div className="col-span-6 sm:col-span-3">
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
										placeholder={cliente.telefono}
										defaultValue={cliente.telefono}
										aria-invalid="true"
										aria-describedby="telefono-error"
									/>
								</div>
							</div>
						</div>

						<div>
							<div className="pt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
								<div className="col-span-6 sm:col-span-2">
									<label htmlFor="moto" className="block text-sm font-medium ">
										Modelo
									</label>
									<select
										id="moto"
										name="moto"
										className="mt-1 dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md">
										{modeloMotos.map((moto) => (
											<option key={moto._id} value={moto._id} selected={cliente.moto[0].modelo.modelo === moto.modelo}>
												{moto.modelo}
											</option>
										))}
									</select>
								</div>

								<div className="col-span-6 sm:col-span-2">
									<label htmlFor="kilometros" className="block text-sm font-medium">
										Kilometros
									</label>
									<div className="mt-1">
										<input
											type="number"
											name="kilometros"
											id="kilometros"
											placeholder={cliente.moto[0].kilometros}
											defaultValue={cliente.moto[0].kilometros}
											min="0"
											required
											autoComplete="kilometros"
											className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none dark:bg-neutral-800 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-neutral-300 dark:border-neutral-500 rounded-md"
										/>
									</div>
								</div>

								<div className="col-span-6 sm:col-span-2">
									<label htmlFor="año" className="block text-sm font-medium">
										Año
									</label>
									<div className="mt-1">
										<input
											type="number"
											name="año"
											id="año"
											placeholder={cliente.moto[0].año}
											defaultValue={cliente.moto[0].año}
											min="1960"
											max={new Date().getFullYear()}
											required
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
									onClick={() => setShowUpdateModal(false)}
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
				</section>
			</div>
		</>
	);
};

export default ModalUpdateCliente;
