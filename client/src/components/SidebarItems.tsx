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
	icon: React.ReactNode;
};

/* Elementos del Sidebar */
const SidebarItems: Array<SidebarItem> = [
	{
		name: "Dashboard",
		route: "/dashboard",
		icon: <MdOutlineDashboard size={"1.5rem"} />,
	},
	{
		name: "Trabajos",
		route: "/trabajos",
		icon: <FaMotorcycle size={"1.5rem"} />,
	},
	{
		name: "Calendario",
		route: "/calendario",
		icon: <MdOutlineCalendarMonth size={"1.5rem"} />,
	},
	{
		name: "Clientes",
		route: "/clientes",
		icon: <MdOutlineSportsMotorsports size={"1.5rem"} />,
	},
	{
		name: "Facturación",
		route: "/facturacion",
		icon: <FaFileInvoiceDollar size={"1.5rem"} />,
	},
	{
		name: "Notificaciones",
		route: "/notificaciones",
		icon: <MdOutlineNotificationsNone size={"1.5rem"} />,
	},
	{
		name: "Estadísticas",
		route: "/estadisticas",
		icon: <MdOutlineQueryStats size={"1.5rem"} />,
	},
];

export default SidebarItems;
