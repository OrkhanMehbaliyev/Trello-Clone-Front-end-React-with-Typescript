import { InputProps } from "@chakra-ui/react";
import { FieldValues, FieldPath, RegisterOptions } from "react-hook-form";
import { HTTP_METHODS } from "../utils/helpers/staticVariables";

export interface IRHFInputProps<T extends FieldValues> extends InputProps {
  name: FieldPath<T>;
  rules?: RegisterOptions;
}

export interface IRHFProps<T extends FieldValues> {
  name: FieldPath<T>;
  rules?: RegisterOptions;
  label: string;
  labelWidth?: string;
}

export interface IFetchOptions {
  headers?: Record<string, string>;
}

export interface IRefetchProps<T> {
  fetchUrl?: string;
  fetchMethod?: HTTP_METHODS;
  fetchReqData?: T;
  fetchOptions?: IFetchOptions;
}

export interface ResponseModel<T> {
  data: T;
  success: boolean;
  message: string;
}

export interface ILoginProps {
  username: string;
  password: string;
}

export interface IRegisterProps {
  username: string;
  fullname: string;
  email: string;
  password: string;
}
