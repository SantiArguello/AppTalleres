import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import React from "react";
import { Sidebar } from "../src/layout";

describe("Sidebar", () => {
	test("renders", () => {
		render(<Sidebar />);
		expect(screen.getByText("Sidebar")).toBeDefined();
	});
});
