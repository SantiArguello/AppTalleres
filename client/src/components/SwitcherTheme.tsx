import { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

const SwitcherTheme = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
	const icon = theme === "dark" ? <MdLightMode size={"1.5rem"} /> : <MdOutlineDarkMode size={"1.5rem"} />;

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button onClick={toggleTheme} title={`Cambiar al modo ${theme === "light" ? "oscuro" : "claro"}`}>
			{icon}
		</button>
	);
};

export default SwitcherTheme;
