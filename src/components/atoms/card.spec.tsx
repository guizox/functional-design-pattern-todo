import React from "react";
import { render } from "@testing-library/react";
import Card from "./card";

test("<Card /> Renders without props", () => {
  render(<Card />);
});

test("<Card /> Renders with valid props", () => {
  render(<Card className="test" />);
});
