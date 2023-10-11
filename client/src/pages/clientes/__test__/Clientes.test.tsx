import { render, screen } from "@testing-library/react";
import { Clientes } from "../..";
import { expect, test, describe } from "vitest";
import React from "react";

describe("Clientes", () => {
	test("renders Clientes page", () => {
		render(<Clientes />);
		expect(screen.getByText("Clientes")).toBeDefined();
	});
});
