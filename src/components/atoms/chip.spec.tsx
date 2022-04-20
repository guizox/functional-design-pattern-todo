import React from "react";
import { render } from "@testing-library/react";
import Chip from "./chip";

test("<Chip /> Renders without prop", () => {
  render(<Chip />);
});

test("<Chip /> Renders with valid props", () => {
  render(
    <Chip>
      <span>Test</span>
    </Chip>
  );
});

test("<Chip /> validate description", () => {
  const { getByText } = render(
    <Chip>
      <span>Test</span>
    </Chip>
  );

  expect(getByText("Test").textContent).toBe("Test");
});
