import { SidebarItems } from "../components";
import { NavLink } from "react-router-dom";
import LogoBenelli from "../../public/LogoBenelli";
import { MdClose } from "react-icons/md";

const SidebarMobile = ({ ...props }) => {
	const { mobileSidebarOpen, handleMobileSidebar } = props;

	return (
		<>
			<div className={`fixed inset-0 flex z-30 md:hidden ${mobileSidebarOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
				{/* Navbar */}

				<div
					className={`fixed top-0 flex-1 flex flex-col w-56 bg-inherit md:hidden transition duration-300 ${
						mobileSidebarOpen ? "translate-0 visible" : "-translate-x-full opacity-0"
					} `}>
					<div className="relative h-screen flex flex-col pt-5 pb-4 bg-neutral-100 dark:bg-neutral-700">
						<button className="absolute top-0 -right-16 m-4" onClick={handleMobileSidebar}>
							<MdClose size={40} className="text-neutral-200" aria-hidden="true" />
						</button>
						<div className="px-5">
							<LogoBenelli />
						</div>
						<nav className="flex-1 px-3 space-y-1 overflow-hidden">
							{SidebarItems.map((item) => (
								<NavLink
									to={item.route}
									key={item.name}
									onClick={handleMobileSidebar}
									className={({ isActive }) =>
										`rounded-md py-2 px-2 flex items-center text-sm font-medium hover:bg-green-600 hover:text-neutral-100 ${
											isActive && "bg-green-700 text-neutral-100"
										}`
									}>
									<item.icon className="flex-shrink-0 h-6 w-6" />
									<span className="ml-3">{item.name}</span>
								</NavLink>
							))}
						</nav>
					</div>
				</div>
			</div>
			{/* Overlay */}
			<div
				className={`fixed z-10 inset-0 transition-opacity duration-300 bg-neutral-600 bg-opacity-75 ${
					mobileSidebarOpen ? "visible opacity-100" : "opacity-0 invisible"
				}`}
				onClick={handleMobileSidebar}></div>
		</>
	);
};

export default SidebarMobile;
