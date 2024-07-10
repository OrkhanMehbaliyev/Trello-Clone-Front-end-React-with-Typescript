import { FieldValues, RegisterOptions } from "react-hook-form";

import SchemaWorker from "../validation";
import { REGEX_PATTERNS } from "../helpers/staticVariables";
import { ILoginProps } from "../../types/types";

export const loginDefaults: ILoginProps = {
  username: "",
  password: "",
};

type IValidationSchema<T extends FieldValues> = {
  [K in keyof T]: RegisterOptions;
};

const x = SchemaWorker;

export const LOGIN_RULES: IValidationSchema<ILoginProps> = {
  username: x().required().string().minLength(3).maxLength(30).end(),
  password: x().required().string().pattern(REGEX_PATTERNS.PASSWORD).end(),
};
