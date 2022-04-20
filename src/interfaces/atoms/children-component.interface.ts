import React from "react";

export interface IChildrenComponent extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactElement;
}
