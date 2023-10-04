import { NavLink } from "react-router-dom";
import { MdPhone, MdOutlineEmail, MdKeyboardArrowRight } from "react-icons/md";

const clientes = [
	{
		name: "Santiago Arguello",
		email: "santiago.arguello@example.com",
		imageUrl: "https://avatars.githubusercontent.com/u/106771179?v=4",
		moto: "Benelli TRK 502",
		phone: "299-1234567",
		href: "#",
	},
	{
		name: "Agustin Petrini",
		email: "agus.petri@example.com",
		imageUrl: "https://avatars.githubusercontent.com/u/109110678?v=4",
		moto: "Benelli TRK 502",
		phone: "299-1234567",
		href: "#",
	},
	{
		name: "Maximiliano Herr",
		email: "max.herr@example.com",
		imageUrl: "https://avatars.githubusercontent.com/u/102885256?v=4",
		moto: "Benelli TRK 502",
		phone: "299-1234567",
		href: "#",
	},
	{
		name: "Erik Fille... etc",
		email: "el.erik@example.com",
		imageUrl: "",
		moto: "Benelli TRK 502",
		phone: "299-1234567",
		href: "#",
	},
];

export default function Clientes() {
	return (
		<>
			<h2 className="text-xl font-bold mb-2">Clientes</h2>
			<div className="bg-neutral-100 dark:bg-neutral-800 shadow overflow-hidden sm:rounded-md">
				<ul role="list" className="divide-y divide-neutral-200 dark:divide-neutral-700">
					{clientes.map((client) => (
						<li key={client.email}>
							<NavLink to={client.href} className="block hover:bg-neutral-200 dark:hover:bg-neutral-700">
								<div className="flex items-center px-4 py-4 sm:px-6">
									<div className="min-w-0 flex-1 flex items-center">
										{/* Imagen Perfil */}
										{client.imageUrl ? (
											<div className="flex-shrink-0">
												<img className="h-12 w-12 rounded-full" src={client.imageUrl} alt="" />
											</div>
										) : (
											<span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
												<svg className="h-full w-full text-neutral-300 dark:text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
													<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
												</svg>
											</span>
										)}

										<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
											<div>
												<p className="text-sm font-semibold text-green-600 truncate">{client.name}</p>
												<p className="mt-2 flex items-center text-sm ">
													<span className="flex-shrink-0 mr-1.5" aria-hidden="true">
														<MdOutlineEmail />
													</span>
													<span className="truncate">{client.email}</span>
												</p>
											</div>
											<div className="hidden md:block">
												<div>
													<p className="text-sm font-medium">Moto {client.moto}</p>
													<p className="mt-2 flex items-center text-sm">
														<span className="flex-shrink-0 mr-1.5 " aria-hidden="true">
															<MdPhone />
														</span>
														{client.phone}
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
					))}
				</ul>
			</div>
		</>
	);
}
