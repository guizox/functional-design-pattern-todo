import React from "react";
import { render } from "@testing-library/react";
import Text from "./text";

test("<Text /> Renders without prop", () => {
  render(<Text />);
});

test("<Text /> Renders with valid props", () => {
  render(<Text className="pt-8" />);
});

test("<Text /> valid children", () => {
  const { getByTestId } = render(<Text>test</Text>);

  expect(getByTestId("text")).toBeDefined();
  expect(getByTestId("text").getAttribute("class")).toBe(
    "text-gray-700 overflow-hidden text-ellipsis whitespace-nowrap"
  );
});

test("<Text /> validate description and ellipses false", () => {
  const { getByTestId } = render(<Text ellipsis={false}>test</Text>);

  expect(getByTestId("text")).toBeDefined();
  expect(getByTestId("text").getAttribute("class")).toBe("text-gray-700");
});
