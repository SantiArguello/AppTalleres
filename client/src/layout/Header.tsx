import { useState } from "react";
import LogoBenelli from "../../public/LogoBenelli";
import { SwitcherTheme } from "../components";
import { MdSearch, MdExpandMore, MdExpandLess } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
	/**
	 * TO DO:
	 * Crear estado para manejar el texto de la busqueda
	 */

	const [showMenu, setShowMenu] = useState(false);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log("Cambie el texto");
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Submit Buscar");
	};

	const handleMenu = () => {
		console.log(showMenu);
		setShowMenu(!showMenu);
	};

	return (
		<header className="relative top-0 left-0 right-0 bg-neutral-50 dark:bg-neutral-800 z-10 text-neutral-900 dark:text-neutral-100">
			<div className="flex justify-between mx-auto max-w-screen-xxl px-4 sm:px-6 xl:px-8 py-1">
				<LogoBenelli />
				<div className="flex items-center justify-end gap-4">
					<div className="flex items-center gap-4">
						<div className="relative"></div>
						{/* Barra busqueda y boton theme */}

						<div className="flex items-center justify-center">
							<form onSubmit={handleSubmit}>
								<div className="relative">
									<span className="absolute inset-y-0 left-0 flex items-center pl-2">
										<button type="submit" className="p-1 outline-none focus:shadow-outline active:scale-75 transform transition-transform">
											<MdSearch />
										</button>
									</span>
									<input
										type="search"
										name="search"
										onChange={handleSearch}
										className="py-2 text-sm t pl-10 outline-none dark:outline-none bg-inherit focus:ring-green-700 border-0"
										placeholder="Buscar..."
									/>
								</div>
							</form>
						</div>

						{/* Boton theme */}

						<SwitcherTheme />
					</div>

					{/* Separador */}

					<span aria-hidden="true" className="block h-6 w-px rounded-full"></span>

					{/* Imagen de perfil */}

					<img
						alt="Perfil "
						src="https://i.pinimg.com/originals/38/e9/e7/38e9e70515469e8560d3fcd0b82641a8.jpg"
						className="h-10 w-10 rounded-full object-cover"
					/>

					{/* Boton menu */}

					<div className="relative">
						<button className="hover:text-green-700 transform transition-transform active:scale-75" onClick={handleMenu}>
							<span className="sr-only">Menu</span>
							{showMenu ? <MdExpandLess /> : <MdExpandMore />}
						</button>

						<div
							className={`absolute end-0 z-10 mt-5 p-1 w-48 rounded-md bg-neutral-50 shadow-md  dark:bg-neutral-800 transition ${
								showMenu ? "opacity-100 visible translate-y-2" : "opacity-0 -translate-y-2 invisible"
							}`}
							role="menu">
							<div className="p-2">
								<NavLink
									to="/"
									className="block rounded-md px-4 py-2 text-sm hover:bg-green-700 hover:text-neutral-100 p-2"
									role="menuitem">
									Mi Perfil
								</NavLink>
							</div>
							<div className="p-2">
								<NavLink
									to="/"
									className="block rounded-md px-4 py-2 text-sm hover:bg-green-700 hover:text-neutral-100 p-2"
									role="menuitem">
									Ajustes
								</NavLink>
							</div>
							<div className="p-2">
								<NavLink
									to="/"
									className="block rounded-md px-4 py-2 text-sm hover:bg-green-700 hover:text-neutral-100 p-2"
									role="menuitem">
									Ayuda
								</NavLink>
							</div>
							<div className="p-2">
								<NavLink
									to="/"
									className="block rounded-md px-4 py-2 text-sm hover:bg-red-700 hover:text-neutral-100 p-2 text-red-700"
									role="menuitem">
									Salir
								</NavLink>
							</div>
						</div>
					</div>

					{/* Fin boton menu */}
				</div>
			</div>
		</header>
	);
};

export default Header;
