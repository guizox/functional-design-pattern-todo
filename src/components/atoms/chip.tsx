import clsx from "clsx";
import React from "react";
import { IChip } from "../../interfaces/atoms/chip.interface";

const Chip: React.FC<IChip> = ({ children, className, ...props }) => {
  return (
    <div className={clsx("p-2 bg-gray-200 rounded-lg", className)} {...props}>
      {children}
    </div>
  );
};

export default Chip;
