import { NavLink } from "react-router-dom";
import { Cliente } from "../utils/interfaces";
import { MdKeyboardArrowRight, MdOutlineEmail, MdPhone } from "react-icons/md";

const ClientCard = ({ client }: { client: Cliente }) => {
	return (
		<NavLink to={`/clientes/${client._id}`} className="block hover:bg-neutral-200 dark:hover:bg-neutral-700">
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
	);
};

export default ClientCard;
