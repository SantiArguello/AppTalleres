import { Header, Sidebar } from ".";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100">
			<Header />
			<div className="flex">
				<Sidebar />
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
