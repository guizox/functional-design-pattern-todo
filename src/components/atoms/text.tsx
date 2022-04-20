import React from "react";
import clsx from "clsx";
import { IText } from "../../interfaces/atoms/text.interface";

const Text: React.FC<IText> = ({
  id,
  children,
  className,
  ellipsis = true,
  ...rest
}) => {
  const hasAnotherColor = className?.includes("text-");

  return (
    <p
      data-testid="text"
      {...rest}
      id={id}
      className={clsx(
        {
          "text-gray-700": !hasAnotherColor,
          "overflow-hidden text-ellipsis whitespace-nowrap": ellipsis,
        },
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;
