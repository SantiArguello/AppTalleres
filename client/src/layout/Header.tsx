import LogoBenelli from "../../public/LogoBenelli";
import { SwitcherTheme } from "../components";
import { MdSearch } from "react-icons/md";

const Header = () => {
	/**
	 * TO DO:
	 * Crear estado para manejar el texto de la busqueda
	 */

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log("Cambie el texto");
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Submit Buscar");
	};

	return (
		<header className="relative top-0 left-0 right-0 bg-neutral-50 dark:bg-neutral-800 z-10 text-neutral-900 dark:text-neutral-100">
			<div className="flex justify-between mx-auto max-w-screen-xxl px-4 sm:px-6 xl:px-8 py-1">
				<LogoBenelli />
				<div className="flex items-center justify-end gap-4">
					<div className="flex items-center gap-4">
						<div className="relative"></div>

						{/* Barra busqueda y boton theme */}

						<div className="flex items-center justify-center ">
							<form onSubmit={handleSubmit}>
								<div className="relative">
									<span className="absolute inset-y-0 left-0 flex items-center pl-2">
										<button type="submit" className="p-1 outline-none dark:outline-none focus:outline-none focus:shadow-outline ">
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
				</div>
			</div>
		</header>
	);
};

export default Header;
