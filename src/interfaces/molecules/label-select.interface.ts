import React from "react";
import { IFlexCol } from "../atoms/flex.interface";
import { ISelect } from "../atoms/select.interface";
import { IText } from "../atoms/text.interface";

export interface ILabelSelect<OP> {
  label: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: OP[];
  placeholder?: string;
  labelProps?: Omit<IText, "children">;
  selectProps?: Omit<ISelect, "onChange" | "placeholder">;
  flexColProps?: IFlexCol;
}
