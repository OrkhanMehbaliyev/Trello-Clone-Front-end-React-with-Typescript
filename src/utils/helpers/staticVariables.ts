import { IFetchOptions } from "../../types/types";

export enum HTTP_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export enum PageModes {
  CREATE = "CREATE",
  EDIT = "EDIT",
}

export const ALLOWED_TAGS_DYNAMIC_TABLE = [
  "TABLE",
  "TR",
  "TD",
  "THEAD",
  "TFOOT",
  "TBODY",
  "INPUT",
];

export const defaultFetchOption: IFetchOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const REGEX_PATTERNS = {
  NUMBER: /^(?!0\d)\d*\.?\d*$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  CONTACT_NUMBER: /^\+?[1-9]\d{1,14}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
};
