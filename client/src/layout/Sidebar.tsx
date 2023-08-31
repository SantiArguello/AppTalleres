import {
	MdOutlineDashboard,
	MdOutlineSportsMotorsports,
	MdOutlineCalendarMonth,
	MdOutlineNotificationsNone,
	MdOutlineQueryStats,
} from "react-icons/md";
import { FaMotorcycle, FaFileInvoiceDollar } from "react-icons/fa";

type SidebarItem = {
	name: string;
	route: string;
	icon: JSX.Element;
};

/* Elementos del Sidebar */
const sidebarItems: Array<SidebarItem> = [
	{
		name: "Dashboard",
		route: "/",
		icon: <MdOutlineDashboard />,
	},
	{
		name: "Trabajos",
		route: "/",
		icon: <FaMotorcycle />,
	},
	{
		name: "Calendario",
		route: "/",
		icon: <MdOutlineCalendarMonth />,
	},
	{
		name: "Clientes",
		route: "/",
		icon: <MdOutlineSportsMotorsports />,
	},
	{
		name: "Facturación",
		route: "/",
		icon: <FaFileInvoiceDollar />,
	},
	{
		name: "Notificaciones",
		route: "/",
		icon: <MdOutlineNotificationsNone />,
	},
	{
		name: "Estadísticas",
		route: "/",
		icon: <MdOutlineQueryStats />,
	},
];

const Sidebar = () => {
	return (
		<aside className="flex h-screen w-64 flex-col justify-between border-e bg-neutral-100 dark:bg-neutral-800 z-10 text-neutral-900 dark:text-neutral-100 font-medium">
			<div className="px-4 py-6">
				<ul className="mt-6 space-y-1">
					{sidebarItems.map((item) => (
						<li key={item.name} className="flex items-center ms-2">
							<a
								href={item.route}
								className="flex items-center gap-3 rounded-lg w-48 px-4 py-2 hover:bg-green-700 hover:text-neutral-100 dark:hover:bg-green-700 ">
								{item.icon}
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
