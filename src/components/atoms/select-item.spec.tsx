import React from "react";
import { render } from "@testing-library/react";
import SelectItem from "./select-item";

test("<SelectItem /> Renders without prop", () => {
  render(<SelectItem />);
});

test("<SelectItem /> Renders with valid props", () => {
  render(<SelectItem className="pt-8" />);
});

test("<SelectItem /> validate label", () => {
  const { getByTestId } = render(<SelectItem label="test" />);

  expect(getByTestId("select-item")).toBeDefined();
  expect(getByTestId("select-item").getAttribute("label")).toBe("test");
  expect(getByTestId("select-item").getAttribute("class")).toBe(
    "block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
  );
});
