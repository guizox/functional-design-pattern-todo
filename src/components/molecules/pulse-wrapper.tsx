import clsx from "clsx";
import React from "react";
import { IFlexCol } from "../../interfaces/atoms/flex.interface";
import { FlexCol } from "../atoms/flex";

const PulseWrapper: React.FC<IFlexCol> = ({ className, ...props }) => (
  <FlexCol
    className={clsx(
      "transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300",
      className
    )}
    {...props}
  />
);

export default PulseWrapper;
