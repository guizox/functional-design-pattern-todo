import React from "react";
import { IFlexCol } from "../atoms/flex.interface";
import { IInput } from "../atoms/input.interface";
import { IText } from "../atoms/text.interface";

export interface ILabelInput {
  label: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  labelProps?: Omit<IText, "children">;
  inputProps?: Omit<IInput, "onChange" | "placeholder">;
  flexColProps?: IFlexCol;
}
