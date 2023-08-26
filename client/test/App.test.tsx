import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
	test("Debería renderizar el título", () => {
		render(<App />);
		expect(screen.getByText("App Talleres")).toBeDefined();
	});
});
