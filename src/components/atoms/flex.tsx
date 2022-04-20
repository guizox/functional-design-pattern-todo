import React from "react";
import clsx from "clsx";
import {
  IFlexRow,
  IFlexCol,
  IFlex,
} from "../../interfaces/atoms/flex.interface";

export const FlexRow: React.FC<IFlexRow> = ({ className, ...rest }) => (
  <div className={clsx("flex flex-row", className)} {...rest}></div>
);

export const FlexCol: React.FC<IFlexCol> = ({ className, ...rest }) => (
  <div className={clsx("flex flex-col", className)} {...rest}></div>
);

export const Flex: React.FC<IFlex> = ({ className, ...rest }) => (
  <div className={clsx("flex", className)} {...rest}></div>
);
