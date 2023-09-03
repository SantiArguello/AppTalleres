/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["Noto Sans, sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			textColor: {
				primary: "var(--color-text-primary)",
			},
			backgroundColor: {
				primary: "var(--color-bg-primary)",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
