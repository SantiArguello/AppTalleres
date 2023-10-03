import { Header, Sidebar } from ".";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="w-full h-screen overflow-y-auto">
				<Header />
				<main className="mx-3 my-2">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Layout;
