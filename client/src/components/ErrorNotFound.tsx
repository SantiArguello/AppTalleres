import { NavLink, useRouteError } from "react-router-dom";

const ErrorNotFound = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="grid h-screen px-4  place-content-center">
			<div className="text-center">
				<h1 className="font-black text-gray-200 text-9xl">404</h1>
				<p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>
				<p className="mt-4 text-gray-500">No pudimos encontrar la pagina.</p>
				<NavLink
					to="/"
					className="inline-block px-5 py-3 mt-6 text-sm font-medium rounded-lg hover:bg-green-700 hover:text-neutral-100 dark:hover:bg-green-700 focus:outline-none focus:ring">
					Volver al home
				</NavLink>
			</div>
		</div>
	);
};

export default ErrorNotFound;
