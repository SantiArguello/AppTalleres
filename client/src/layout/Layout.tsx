import { Header, Sidebar } from ".";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Header />
			<div className="flex">
				<Sidebar />
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
