import { Breadcrumbs, Loading } from "../components";
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
					<Breadcrumbs />
					<Outlet />
				</main>
				{navigation.state === "loading" && <Loading />}
			</div>
		</div>
	);
};

export default Layout;
