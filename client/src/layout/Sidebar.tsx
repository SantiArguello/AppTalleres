import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SidebarItems } from "../components";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import LogoBenelli from "../../public/LogoBenelli";

const Sidebar = () => {
	const [collapsed, setSidebarCollapsed] = useState(true);

	const handleCollapsed = () => {
		setSidebarCollapsed(!collapsed);
	};

	return (
		<aside className={`hidden h-screen md:flex ${collapsed ? "md:w-64" : "md:w-20"} md:flex-col md:inset-y-0 duration-300`}>
			<div className="border-r border-neutral-200 dark:border-neutral-600 pt-5 flex flex-col flex-grow px-2">
				{/* LOGO */}

				<div className={`${collapsed && "px-5"}`}>
					<LogoBenelli />
				</div>

				{/* NAV */}

				<div className="flex-grow mt-5 flex flex-col ">
					<button
						onClick={handleCollapsed}
						className={`relative left-5 w-6 my-3 hover:text-green-700 active:scale-95 duration-100 ${collapsed && "rotate-180"}`}>
						<TbLayoutSidebarRightCollapse size={"1.5rem"} />
					</button>
					<nav className="flex-1 px-3 space-y-1 overflow-hidden">
						{SidebarItems.map((item) => (
							<NavLink
								to={item.route}
								key={item.name}
								className={({ isActive }) =>
									`rounded-md py-2 px-2 flex items-center text-sm font-medium hover:bg-green-600 hover:text-neutral-100 ${
										isActive && "bg-green-700 text-neutral-100"
									}`
								}>
								<item.icon className="flex-shrink-0 h-6 w-6" />
								{collapsed && <span className="ml-3">{item.name}</span>}
							</NavLink>
						))}
					</nav>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
