import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

test("<Button /> Renders with valid props", () => {
  render(<Button onClick={() => {}} />);
});

test("<Button /> Renders with valid props", () => {
  render(<Button className="test" />);
});
