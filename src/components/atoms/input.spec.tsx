import React from "react";
import { render } from "@testing-library/react";
import Input from "./input";

test("<Input /> Renders without prop", () => {
  render(<Input />);
});

test("<Input /> Renders with valid props", () => {
  render(<Input className="pt-8" />);
});

test("<Input /> validate label", () => {
  const { getByTestId } = render(<Input label="test" />);

  expect(getByTestId("input")).toBeDefined();
  expect(getByTestId("input").getAttribute("class")).toBe(
    "bg-gray-200 text-black  focus:text-black focus:border-none focus:outline-hard-yellow outline-1 p-4 rounded h-[56px]"
  );
});
