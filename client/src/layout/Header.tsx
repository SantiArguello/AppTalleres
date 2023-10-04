import { useState } from "react";
import { SwitcherTheme } from "../components";
import { MdSearch, MdExpandMore, MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { SidebarMobile } from ".";

const Header = () => {
	/**
	 * TO DO:
	 * Crear estado para manejar el texto de la busqueda
	 */

	const [showProfileOptions, setShowProfileOptions] = useState(false);
	const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log("Cambie el texto");
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Submit Buscar");
	};

	const handleProfileOptions = () => {
		console.log(showProfileOptions);
		setShowProfileOptions(!showProfileOptions);
	};
	const handleMobileSidebar = () => {
		console.log(mobileSidebarOpen);
		setMobileSidebarOpen((prev) => (prev ? false : true));
	};

	return (
		<>
			<header className="sticky top-0 z-10 flex-shrink-0 flex h-16 shadow bg-neutral-100 dark:bg-neutral-800">
				{/* Boton Burguer Responsive */}
				<button className="md:hidden cursor-pointer px-3" onClick={handleMobileSidebar}>
					<MdMenu size={"1.5rem"} />
				</button>
				<div className="flex-1 px-4 flex justify-between">
					{/* Barra busqueda */}

					<div className="flex-1 flex">
						<form className="w-full flex md:ml-0" onSubmit={handleSubmit}>
							<label htmlFor="search-field" className="sr-only">
								Buscar
							</label>
							<div className="relative w-full text-neutral-400 focus-within:text-neutral-600 ">
								<button type="submit" className="absolute inset-y-0 left-0 flex items-center active:scale-75 ">
									<MdSearch />
								</button>
								<input
									className="block w-full h-full pl-8 pr-3 py-2 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm bg-inherit"
									placeholder="Buscar"
									onChange={handleSearch}
									type="search"
									name="search"
								/>
							</div>
						</form>
					</div>

					<div className="ml-4 flex items-center md:mx-4">
						{/* Boton theme */}
						<div className="flex items-center">
							<SwitcherTheme />
						</div>

						<div className="relative flex justify-center ml-4">
							{/* Imagen de perfil */}
							<img
								alt="Perfil"
								src="https://i.pinimg.com/originals/38/e9/e7/38e9e70515469e8560d3fcd0b82641a8.jpg"
								className="h-10 w-10 rounded-full object-cover cursor-pointer"
								onClick={handleProfileOptions}
							/>
							<button
								className="hidden md:block hover:text-green-700 transform transition-transform active:scale-75 mx-2"
								onClick={handleProfileOptions}>
								<MdExpandMore size={"1.5rem"} className={showProfileOptions && "rotate-180"} />
							</button>

							{/* Menu de perfil  */}

							<div
								className={`origin-top-right absolute end-0 z-10 mt-12 p-2 w-48 rounded-md shadow-lg duration-100 ${
									showProfileOptions ? "opacity-100 visible translate-y-2" : "opacity-0 -translate-y-2 invisible"
								}`}
								role="menu">
								<NavLink to="/" className="block rounded-md px-4 py-2 text-sm hover:bg-green-700 hover:text-neutral-100" role="menuitem">
									Mi Perfil
								</NavLink>

								<NavLink to="/" className="block rounded-md px-4 py-2 text-sm hover:bg-green-700 hover:text-neutral-100" role="menuitem">
									Ajustes
								</NavLink>

								<NavLink to="/" className="block rounded-md px-4 py-2 text-sm hover:bg-green-700 hover:text-neutral-100" role="menuitem">
									Ayuda
								</NavLink>

								<NavLink
									to="/"
									className="block rounded-md px-4 py-2 text-sm hover:bg-red-700 hover:text-neutral-100 p-2 text-red-700"
									role="menuitem">
									Salir
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* Sidebar Mobile  */}
			<SidebarMobile mobileSidebarOpen={mobileSidebarOpen} handleMobileSidebar={handleMobileSidebar} />
		</>
	);
};

export default Header;
