import React from "react";
import { render } from "@testing-library/react";
import Header from "./header";

test("<Header /> Renders without props", () => {
  render(<Header />);
});

test("<Header /> validate renders", () => {
  const { getByText } = render(<Header />);

  expect(getByText("InstaMotion").textContent).toBe("InstaMotion");
});

test("<Header /> validate css", () => {
  const { getByTestId } = render(<Header />);

  expect(getByTestId("header").textContent).toBe("InstaMotion");
  expect(getByTestId("header").getAttribute("class")).toBe(
    "h-[80px] w-screen sticky bg-gradient-to-r from-[#054256] to-[#6dc4cd]"
  );
});
