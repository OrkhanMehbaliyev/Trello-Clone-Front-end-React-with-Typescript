import { FieldValues, RegisterOptions } from "react-hook-form";

import SchemaWorker from "../validation";
import { REGEX_PATTERNS } from "../helpers/staticVariables";
import { IRegisterProps } from "../../types/types";

export const registerDefaults: IRegisterProps = {
  username: "",
  fullname: "",
  email: "",
  password: "",
};

type IValidationSchema<T extends FieldValues> = {
  [K in keyof T]: RegisterOptions;
};

const x = SchemaWorker;

export const REGISTER_RULES: IValidationSchema<IRegisterProps> = {
  username: x().required().string().minLength(3).maxLength(30).end(),

  fullname: x().required().string().minLength(1).maxLength(50).end(),

  email: x().required().string().pattern(REGEX_PATTERNS.EMAIL).end(),

  password: x().required().string().pattern(REGEX_PATTERNS.PASSWORD).end(),
};
