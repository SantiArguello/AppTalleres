import { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

const SwitcherTheme = () => {
	const [darkMode, setDarkMode] = useState<boolean>(false);
	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "dark" || (!savedTheme && systemTheme)) {
			setDarkMode(true);
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
	}, [systemTheme]);

	const toggleTheme = () => {
		if (darkMode) {
			localStorage.setItem("theme", "light");
		} else {
			localStorage.setItem("theme", "dark");
		}

		document.documentElement.classList.toggle("dark", !darkMode);
		setDarkMode(!darkMode);
	};

	return (
		<button onClick={toggleTheme} title={`Switch to ${darkMode ? "light" : "dark"} mode`}>
			{darkMode ? <MdLightMode w /> : <MdOutlineDarkMode />}
		</button>
	);
};

export default SwitcherTheme;
