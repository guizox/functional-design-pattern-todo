import clsx from "clsx";
import React from "react";
import { IInput } from "../../interfaces/atoms/input.interface";

const Input: React.FC<IInput> = ({ className, ...props }) => (
  <input
    className={clsx(
      "bg-gray-200 text-black  focus:text-black focus:border-none focus:outline-hard-yellow outline-1 p-4 rounded h-[56px]",
      className
    )}
    data-testid="input"
    {...props}
  />
);

export default Input;
