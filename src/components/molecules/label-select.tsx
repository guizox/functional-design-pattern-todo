import React from "react";
import { ISelectItem } from "../../interfaces/atoms/select-item.interface";
import { ILabelSelect } from "../../interfaces/molecules/label-select.interface";
import { FlexCol } from "../atoms/flex";
import Select from "../atoms/select";
import SelectItem from "../atoms/select-item";
import Text from "../atoms/text";

const LabelSelect = <
  OP extends ISelectItem & { value: string; label: string }
>({
  label,
  onChange,
  placeholder,
  options,
  selectProps,
  labelProps,
  flexColProps,
}: ILabelSelect<OP>) => (
  <FlexCol {...flexColProps}>
    <Text className="py-2 text-xl font-extrabold text-gray-600" {...labelProps}>
      {label}
    </Text>
    <Select onChange={onChange} placeholder={placeholder} {...selectProps}>
      {options?.map((option) => (
        <SelectItem key={option.value} {...option} />
      ))}
    </Select>
  </FlexCol>
);

export default LabelSelect;
