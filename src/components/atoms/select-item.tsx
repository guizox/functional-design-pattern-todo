import clsx from "clsx";
import React from "react";
import { ISelectItem } from "../../interfaces/atoms/select-item.interface";

const SelectItem: React.FC<ISelectItem> = ({ className, ...props }) => (
  <option
    href="#!"
    aria-current="true"
    className={clsx(
      "block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out",
      className
    )}
    data-testid="select-item"
    {...props}
  />
);

export default SelectItem;
