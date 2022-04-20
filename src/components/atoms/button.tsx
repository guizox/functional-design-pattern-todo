import React from "react";
import { IButton } from "../../interfaces/atoms/button.interface";
import clsx from "clsx";
import Text from "./text";

const Button: React.FC<IButton> = ({
  className,
  children,
  onClick,
  disabled,
  loading,
  rounded,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-hard-yellow text-white py-[0.8125rem] px-[3rem] rounded-md font-medium text-base h-[55px] lg:text-lg",
        {
          "rounded-full": rounded,
        },
        className
      )}
      disabled={disabled}
    >
      {loading ? (
        <Text
          id={"button-loading"}
          className="spinner-border spinner-border-sm"
          label="Loading"
        />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
