import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SidebarItems } from "../components";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from "react-icons/tb";

const Sidebar = () => {
	const [collapsed, setSidebarCollapsed] = useState(true);
	const collapsedIcon = collapsed ? <TbLayoutSidebarLeftCollapse size={"1.5rem"} /> : <TbLayoutSidebarRightCollapse size={"1.5rem"} />;

	const handleCollapsed = () => {
		setSidebarCollapsed(!collapsed);
	};

	return (
		<aside
			className={`min-h-screen my-3 flex transition-all ease-in-out ${collapsed ? "w-56" : "w-24"} flex-col shadow-lg overflow-x-hidden`}>
			<button
				onClick={handleCollapsed}
				className={`flex items-center mx-5 hover:text-green-700 ${
					collapsed ? "justify-end" : "justify-center"
				} active:scale-95 transition`}>
				{collapsedIcon}
			</button>
			<ul className="py-6 space-y-1 mx-auto ">
				{SidebarItems.map((item) => (
					<li key={item.name} className="mx-2">
						<NavLink to={item.route} className="flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-green-700 hover:text-neutral-100">
							{item.icon}
							{collapsed && item.name}
						</NavLink>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
