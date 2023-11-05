import { FaFileInvoiceDollar, FaMotorcycle } from "react-icons/fa";
import {
	MdOutlineCalendarMonth,
	MdOutlineDashboard,
	MdOutlineNotificationsNone,
	MdOutlineQueryStats,
	MdOutlineSportsMotorsports,
} from "react-icons/md";

type SidebarItem = {
	name: string;
	route: string;
	icon: React.ComponentType<{ className?: string }>;
};

/* Elementos del Sidebar */
const SidebarItems: Array<SidebarItem> = [
	{
		name: "Dashboard",
		route: "/dashboard",
		icon: MdOutlineDashboard,
	},
	{
		name: "Trabajos",
		route: "/trabajos",
		icon: FaMotorcycle,
	},
	{
		name: "Calendario",
		route: "/calendario",
		icon: MdOutlineCalendarMonth,
	},
	{
		name: "Clientes",
		route: "/clientes",
		icon: MdOutlineSportsMotorsports,
	},
	{
		name: "Facturación",
		route: "/facturacion",
		icon: FaFileInvoiceDollar,
	},
	{
		name: "Notificaciones",
		route: "/notificaciones",
		icon: MdOutlineNotificationsNone,
	},
	{
		name: "Estadísticas",
		route: "/estadisticas",
		icon: MdOutlineQueryStats,
	},
	{
		name: "Stock",
		route: "/stock",
		icon: MdOutlineQueryStats,
	},
];

export default SidebarItems;
