import { NavLink } from "react-router-dom";
import { MdPhone, MdOutlineEmail, MdKeyboardArrowRight, MdPersonSearch } from "react-icons/md";
import { Cliente } from "../utils/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Clientes() {
	const [clientes, setClientes] = useState<Cliente[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getClientes = async () => {
			try {
				const { data } = await axios.get("http://localhost:3000/clientes");
				setClientes(data);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		};

		getClientes();
	}, []);

	return (
		<>
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-xl font-bold">Clientes</h2>

				{/* BARRA BUSQUEDA */}

				<div className="hidden lg:block">
					<div className="mt-1 flex rounded-md shadow-sm">
						<div className="relative flex items-stretch flex-grow focus-within:z-10">
							<input
								type="email"
								name="email"
								id="email"
								className="focus:ring-green-500 focus:border-green-500 block w-full rounded-none rounded-l-md sm:text-sm border-neutral-300 bg-inherit dark:border-neutral-600"
								placeholder="John Tattoo"
							/>
						</div>
						<button
							type="button"
							className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-sm font-medium rounded-r-md hover:bg-neutral-100 dark:hover:bg-neutral-600 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
							<MdPersonSearch size={"1.25rem"} color={"gray"} />
						</button>
					</div>
				</div>

				{/* Boton Crear Cliente */}

				<button
					type="button"
					onClick={() => console.log("Crear Cliente")}
					className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-neutral-50 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
					Crear Cliente
				</button>
			</div>

			{/* LISTA CLIENTES */}

			<div className="bg-neutral-100 dark:bg-neutral-800 shadow overflow-hidden sm:rounded-md">
				<ul role="list" className="divide-y divide-neutral-200 dark:divide-neutral-700">
					{loading ? (
						<div className="flex items-center px-4 py-4 sm:px-6">
							<div className="min-w-0 flex-1 flex items-center animate-pulse  ">
								<div className="rounded-full bg-neutral-200 dark:bg-neutral-600 h-12 w-12"></div>
								<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
									<div className="space-y-6 py-1">
										<div className="h-3 max-w-xs bg-neutral-200 dark:bg-neutral-600 rounded"></div>
										<div className="h-3 max-w-xs bg-neutral-200 dark:bg-neutral-600 rounded"></div>
									</div>
									<div className="hidden md:block">
										<div className="space-y-6 py-1">
											<div className="h-3 max-w-xs bg-neutral-200 dark:bg-neutral-600 rounded"></div>
											<div className="h-3 max-w-xs bg-neutral-200 dark:bg-neutral-600 rounded"></div>
										</div>
									</div>
								</div>
							</div>
							<div></div>
						</div>
					) : (
						clientes.map((client) => (
							<li key={client.correo}>
								<NavLink to="#" className="block hover:bg-neutral-200 dark:hover:bg-neutral-700">
									<div className="flex items-center px-4 py-4 sm:px-6">
										<div className="min-w-0 flex-1 flex items-center">
											<span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
												<svg className="h-full w-full text-neutral-300 dark:text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
													<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
												</svg>
											</span>

											<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
												<div>
													<p className="text-sm font-semibold text-green-600 truncate">{`${client.apellido} ${client.nombre}`}</p>
													<p className="mt-2 flex items-center text-sm ">
														<span className="flex-shrink-0 mr-1.5" aria-hidden="true">
															<MdOutlineEmail />
														</span>
														<span className="truncate">{client.correo}</span>
													</p>
												</div>
												<div className="hidden md:block">
													<div>
														<p className="text-sm font-medium">
															{client.moto.length ? client.moto.map((moto) => moto.modelo.modelo) : "Sin especificar"}
														</p>
														<p className="mt-2 flex items-center text-sm">
															<span className="flex-shrink-0 mr-1.5 " aria-hidden="true">
																<MdPhone />
															</span>
															{client.telefono || "Sin telefono"}
														</p>
													</div>
												</div>
											</div>
										</div>
										<div>
											<MdKeyboardArrowRight />
										</div>
									</div>
								</NavLink>
							</li>
						))
					)}
				</ul>
			</div>
		</>
	);
}
