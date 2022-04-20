import clsx from "clsx";
import React from "react";
import { ISelect } from "../../interfaces/atoms/select.interface";

const Select: React.FC<ISelect> = ({ className, ...props }) => {
  return (
    <select
      className={clsx(
        "bg-gray-200 text-black  focus:text-black focus:border-none focus:outline-hard-yellow outline-1 p-4 rounded h-[56px]",
        className
      )}
      {...props}
      data-testid="select"
    />
  );
};

export default Select;
