import { Input } from "@chakra-ui/react";
import { Controller, FieldValues, useFormContext } from "react-hook-form";

import { IRHFInputProps } from "../../types/types";

const RHFInput = <T extends FieldValues>({
  name,
  rules,
  ...props
}: IRHFInputProps<T>) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        return <Input {...props} value={value} onChange={onChange} />;
      }}
      rules={rules}
    />
  );
};

export default RHFInput;
