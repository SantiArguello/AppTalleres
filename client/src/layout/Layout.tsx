import { Header, Sidebar } from ".";
import { Outlet, useNavigation } from "react-router-dom";

const Layout = () => {
	const navigation = useNavigation();

	return (
		<div className="flex">
			<Sidebar />
			<div className="w-full h-screen overflow-y-auto bg-neutral-50 dark:bg-neutral-900">
				<Header />
				<main className="relative px-3 py-2">
					<Outlet />
				</main>
				{navigation.state === "loading" && (
					<div className="mt-4 flex items-center justify-center space-x-2">
						<div className="w-3 h-3 rounded-full animate-pulse bg-green-400"></div>
						<div className="w-3 h-3 rounded-full animate-pulse bg-green-500"></div>
						<div className="w-3 h-3 rounded-full animate-pulse bg-green-600"></div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Layout;
