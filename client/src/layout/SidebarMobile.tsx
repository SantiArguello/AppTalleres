import { SidebarItems } from "../components";
import { NavLink } from "react-router-dom";
import LogoBenelli from "../../public/LogoBenelli";
import { MdClose } from "react-icons/md";

const SidebarMobile = ({ ...props }) => {
	const { mobileSidebarOpen, handleMobileSidebar } = props;

	return (
		<div className={`fixed inset-0 flex z-30 md:hidden ${mobileSidebarOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
			{/* Overlay */}
			<div
				className={`fixed inset-0 transition-opacity duration-300 bg-neutral-600 bg-opacity-75 ${
					mobileSidebarOpen ? "visible opacity-100" : "opacity-0 invisible"
				}`}
				onClick={handleMobileSidebar}></div>

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
	);
};

export default SidebarMobile;

{
	/*

${
					mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
				}

    <div className={`transition-root ${sidebarOpen ? 'block' : 'hidden'}`}>
      <div className="dialog fixed inset-0 flex z-40 md:hidden">
        {/* Overlay
        <div className="transition-child overlay fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        {/* Sidebar
        <div className="transition-child sidebar flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
          {/* Close Button
          <div className="transition-child absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                Add your XIcon SVG code here
              </svg>
            </button>
          </div>
           Sidebar Content
          <div className="flex-shrink-0 flex items-center px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
              alt="Workflow"
            />
          </div>
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <nav className="px-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                >
                  <item.icon
                    className={`${
                      item.current
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500'
                    } mr-4 flex-shrink-0 h-6 w-6`}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
        {/* Dummy element to force sidebar to shrink to fit close icon
        <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
      </div>
    </div>

 */
}
