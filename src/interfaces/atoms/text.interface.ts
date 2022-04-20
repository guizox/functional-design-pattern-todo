import React from "react";

export interface IText extends React.HTMLProps<HTMLParagraphElement> {
  ellipsis?: boolean;
}
