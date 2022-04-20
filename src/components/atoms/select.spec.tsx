import React from "react";
import { render } from "@testing-library/react";
import Select from "./select";

test("<Select /> Renders without prop", () => {
  render(<Select />);
});

test("<Select /> Renders with valid props", () => {
  render(<Select className="pt-8" />);
});

test("<Select /> validate label", () => {
  const { getByTestId } = render(<Select label="test" />);

  expect(getByTestId("select")).toBeDefined();
  expect(getByTestId("select").getAttribute("class")).toBe(
    "bg-gray-200 text-black  focus:text-black focus:border-none focus:outline-hard-yellow outline-1 p-4 rounded h-[56px]"
  );
  expect(getByTestId("select").getAttribute("label")).toBe("test");
});
