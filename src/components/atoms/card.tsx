import clsx from "clsx";
import React from "react";
import ICard from "../../interfaces/atoms/card.interface";

const Card: React.FC<ICard> = ({ className, ...props }) => {
  return (
    <div
      className={clsx("rounded-xl overflow-hidden shadow-lg", className)}
      {...props}
    />
  );
};

export default Card;
