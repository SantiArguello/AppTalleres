import { IconContext } from "react-icons";
import { MdPersonSearch } from "react-icons/md";
import { LuLoader2 } from "react-icons/lu";
import { Form, useNavigation } from "react-router-dom";

const ClientSearchBar = () => {
	const navigation = useNavigation();

	const isSearching = navigation.state === "loading" && navigation.location.search;

	return (
		<div className="hidden md:block">
			<Form className="mt-1 flex rounded-md shadow-sm">
				<div className="relative flex">
					<input
						className="ps-3 green-900 outline-none focus:ring-1 focus-visible:ring-green-500 focus:ring-green-500 focus:border-green-500 block w-full rounded-none rounded-l-md sm:text-sm bg-inherit placeholder:text-neutral-500"
						type="search"
						name="search"
						aria-label="Buscar cliente"
						placeholder="Buscar cliente"
					/>
				</div>
				<button
					type="submit"
					className="-ml-px inline-flex items-center space-x-2 px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-sm font-medium rounded-r-md hover:bg-neutral-100 dark:hover:bg-neutral-600 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
					{isSearching ? (
						<IconContext.Provider value={{ className: "animate-spin" }}>
							<LuLoader2 size={20} color={"gray"} />
						</IconContext.Provider>
					) : (
						<MdPersonSearch size={20} />
					)}
				</button>
			</Form>
		</div>
	);
};

export default ClientSearchBar;
