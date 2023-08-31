import React from "react";
import { Header, Sidebar } from ".";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<div className="flex">
				<Sidebar />
				{children}
			</div>
		</>
	);
};

export default Layout;
