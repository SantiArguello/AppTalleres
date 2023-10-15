import { HiMiniHome, HiMiniChevronRight } from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
	const { pathname } = useLocation();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let currentLink = "";

	const crumbs = pathname
		.split("/")
		.filter((crumb) => crumb !== "" && crumb.length < 20)
		.map((crumb) => {
			currentLink += `/${crumb}`;

			return (
				<div className="flex items-center cursor-default" key={crumb}>
					<HiMiniChevronRight className="flex-shrink-0 h-5 w-5 text-neutral-400" aria-hidden="true" />
					<span className="ml-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 capitalize">{crumb}</span>
				</div>
			);
		});

	return (
		<nav className="hidden md:flex mt-1 mb-3" aria-label="Breadcrumb">
			<ol role="list" className="flex items-center space-x-1">
				<li>
					<div>
						<NavLink to="/" className="text-neutral-600 dark:text-neutral-500 hover:text-neutral-500">
							<HiMiniHome className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
							<span className="sr-only">Home</span>
						</NavLink>
					</div>
				</li>
				{crumbs}
			</ol>
		</nav>
	);
};

export default Breadcrumbs;
