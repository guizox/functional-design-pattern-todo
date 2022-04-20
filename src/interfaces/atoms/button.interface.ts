import React from "react";

export interface IButton extends React.HTMLProps<HTMLButtonElement> {
  rounded?: boolean;
  loading?: boolean;
}
