import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { Cliente } from "../../utils/interfaces";
import { TbUserEdit, TbUserMinus } from "react-icons/tb";
import { MdWhatsapp, MdOutlineEmail, MdArrowBack } from "react-icons/md";

const statusStyles = {
	finalizado: "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100",
	trabajando: "bg-yellow-100 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-100",
	fallido: "bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-100",
};

const trabajos = [
	{
		id: 1,
		name: "Service completo",
		amount: "$20,000",
		status: "trabajando",
		date: "11 Septiembre, 2023",
		datetime: "2020-07-11",
	},
	{
		id: 2,
		name: "Reparacion de motor",
		amount: "$20,000",
		status: "finalizado",
		date: "25 Agosto, 2023",
		datetime: "2020-07-11",
	},
];

const ClienteDetalle = () => {
	const { cliente } = useLoaderData() as { cliente: Cliente };

	const navigate = useNavigate();
	// const [showModal, setShowModal] = useState(false);
	// const [confirmDelete, setConfirmDelete] = useState(false);

	// console.log(confirmDelete);

	// const onDeleteSubmit = () => {
	// 	setShowModal(true);
	// 	if (confirmDelete) {
	// 		// event.preventDefault();
	// 		window.alert("Usuario eliminado");
	// 		return;
	// 	}
	// 	// break;
	// };

	return (
		<>
			<div className="flex items-center justify-between mb-4">
				<button
					className="ms-2 rounded-md shadow py-2 px-2 hover:bg-green-600 hover:text-neutral-50"
					title="Volver"
					onClick={() => navigate(-1)}>
					<MdArrowBack size={20} />
				</button>
				<div className="flex md:mt-0 md:ml-4 space-x-3">
					<Form method="delete">
						<button
							type="submit"
							title="Eliminar usuario"
							className="flex items-center py-2 px-3 rounded-md shadow text-sm leading-4 font-medium  hover:bg-red-600 hover:text-neutral-100  dark:hover:bg-red-700 outline-none border-none focus:ring-2 focus:ring-red-500">
							<TbUserMinus size={20} />
							<span className="hidden lg:block ml-2">Eliminar usuario</span>
						</button>
					</Form>
					<Form>
						<button
							type="button"
							title="Editar usuario"
							className="flex items-center py-2 px-3 rounded-md shadow text-sm leading-4 font-medium  hover:bg-green-600 hover:text-neutral-100  dark:hover:bg-green-700 outline-none border-none focus:ring-2 focus:ring-green-000">
							<TbUserEdit size={20} />
							<span className="hidden lg:block ml-2">Editar usuario</span>
						</button>
					</Form>
				</div>
			</div>

			<div className="px-4 py-5">
				<div className=" flex flex-col lg:flex-row text-center lg:text-start lg:justify-between items-center lg:items-start space-y-6 lg:space-y-0">
					<h3 className="text-3xl font-bold lg:w-48">
						{cliente.nombre} {cliente.apellido}
					</h3>
					<div className="flex flex-col text-center space-y-2">
						<h3 className="text-2xl font-medium">Benelli {cliente.moto.map((moto) => moto.modelo.modelo)}</h3>
						<p className="text-xl font-normal">Modelo {cliente.moto.map((moto) => moto.año)}</p>
						<p className="text-lg font-thin">Kilometraje {cliente.moto.map((moto) => moto.kilometros)}</p>
					</div>
					<div className="flex justify-center">
						<a
							href={`https://wa.me/${cliente.telefono}`}
							title="Enviar whatsapp"
							aria-label="Whatsapp"
							target="_blanck"
							className="relative inline-flex items-center px-4 py-2 shadow text-sm font-medium rounded-md hover:bg-green-600 hover:text-neutral-100  focus:outline-none focus:border-none focus:ring-2 focus:ring-green-500 cursor-pointer">
							<MdWhatsapp className="-ml-1 mr-2 h-5 w-5 -400" aria-hidden="true" />
							<span>Whatsapp</span>
						</a>
						<a
							href={`mailto:${cliente.correo}`}
							title={`Enviar email a ${cliente.correo}`}
							aria-label="Email"
							aria-describedby="email-description"
							className="ml-3 relative inline-flex items-center px-4 py-2 shadow text-sm font-medium rounded-md hover:bg-blue-500 hover:text-neutral-100 focus:outline-none focus:ring-2 focus:border-none focus:ring-blue-500 cursor-pointer">
							<MdOutlineEmail className="-ml-1 mr-2 h-5 w-5 -400" aria-hidden="true" />
							<span>Email</span>
						</a>
					</div>
				</div>
			</div>

			<main className="flex-1 pb-8">
				<div className="mt-8">
					<h3 className="mx-auto mt-8 px-4 pb-3 text-lg leading-6 font-medium sm:px-6 lg:px-8">Trabajos realizados</h3>

					{/* Tabla para mobile  */}
					<div className="shadow sm:hidden">
						<ul role="list" className="mt-2 divide-y divide-neutral-200 dark:divide-neutral-600 overflow-hidden shadow sm:hidden">
							{trabajos.map((transaction) => (
								<li key={transaction.id}>
									<div className="block px-4 py-4  hover:bg-neutral-100 dark:hover:bg-neutral-700 bg-neutral-50 dark:bg-neutral-800">
										<span className="flex items-center space-x-4">
											<span className="flex-1 flex space-x-2 truncate">
												<span className="flex flex-col text-sm truncate">
													<span className="truncate">{transaction.name}</span>
													<span>
														<span className="font-medium">{transaction.amount}</span>
													</span>
													<time dateTime={transaction.datetime}>{transaction.date}</time>
												</span>
											</span>
										</span>
									</div>
								</li>
							))}
						</ul>
					</div>

					{/* Tabla para desktop */}
					<div className="hidden sm:block">
						<div className="mx-auto px-4">
							<div className="flex flex-col mt-2">
								<div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
									<table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-600">
										<thead>
											<tr>
												<th className="px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-left text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
													Descripcion
												</th>
												<th className="px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-right text-xs font-bold text-neutral-600 dark:text-neutral-400\ uppercase tracking-wider">
													Precio
												</th>
												<th className="hidden px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-left text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider md:block">
													Estado
												</th>
												<th className="px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-right text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
													Fecha
												</th>
											</tr>
										</thead>
										<tbody className=" divide-y divide-neutral-200 dark:divide-neutral-600">
											{trabajos.map((transaction) => (
												<tr key={transaction.id} className="">
													<td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm">
														<div className="flex">
															<p className=" truncate group-hover:text-neutral-500">{transaction.name}</p>
														</div>
													</td>
													<td className="px-6 py-4 text-right whitespace-nowrap text-sm">
														<span className="font-medium">{transaction.amount} </span>
													</td>
													<td className="hidden px-6 py-4 whitespace-nowrap text-sm md:block">
														<span
															className={`${
																statusStyles[transaction.status]
															} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize`}>
															{transaction.status}
														</span>
													</td>
													<td className="px-6 py-4 text-right whitespace-nowrap text-sm">
														<time dateTime={transaction.datetime}>{transaction.date}</time>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* {showModal && <ModalConfirm showModal={showModal} setShowModal={setShowModal} setConfirmDelete={setConfirmDelete} />} */}
		</>
	);
};

export default ClienteDetalle;
