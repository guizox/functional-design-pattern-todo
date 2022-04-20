import React from "react";
import { render } from "@testing-library/react";
import { Flex, FlexCol, FlexRow } from "./flex";

test("<Flex /> Renders without props", () => {
  render(<Flex />);
});

test("<Flex /> Renders with children", () => {
  render(
    <Flex>
      <p>test</p>
    </Flex>
  );
});

test("<Flex /> Renders without props", () => {
  render(<FlexCol />);
});

test("<Flex /> Renders without props", () => {
  render(<FlexRow />);
});
