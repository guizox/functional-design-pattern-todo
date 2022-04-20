import React from "react";
import { ILabelInput } from "../../interfaces/molecules/label-input.interface";
import { FlexCol } from "../atoms/flex";
import Input from "../atoms/input";
import Text from "../atoms/text";

const LabelInput: React.FC<ILabelInput> = ({
  label,
  onChange,
  placeholder,
  inputProps,
  labelProps,
  flexColProps,
}) => (
  <FlexCol {...flexColProps}>
    <Text
      className="py-2 text-xl h-[45px] font-extrabold text-gray-600"
      {...labelProps}
    >
      {label}
    </Text>
    <Input onChange={onChange} placeholder={placeholder} {...inputProps} />
  </FlexCol>
);

export default LabelInput;
