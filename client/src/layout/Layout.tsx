import { Header, Sidebar } from ".";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="w-full h-screen overflow-y-auto bg-neutral-50 dark:bg-neutral-900">
				<Header />
				<main className="px-3 py-2">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Layout;
