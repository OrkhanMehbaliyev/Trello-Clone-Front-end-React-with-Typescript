import { toCapitalStart } from "./helper-functions";

export const validationMessages = {
  requiredMessage: (field: string) => `${toCapitalStart(field)} is required!`,
  minLengthMessage: (field: string, limit: number) =>
    `The length of a ${toCapitalStart(
      field
    )} must be minimum ${limit} character!`,
  maxLengthMessage: (field: string, limit: number) =>
    `The length of a ${toCapitalStart(
      field
    )} cannot exceed ${limit} characters!`,
  minimumMessage: (field: string, limit: number) =>
    `${toCapitalStart(field)} must be minimum ${limit}`,
  maximumMessage: (field: string, limit: number) =>
    `${toCapitalStart(field)} can be maximum ${limit}`,
  patternErrorMessage: (field: string) =>
    `${toCapitalStart(field)} must be written in correct form!`,
  typeErrorMessage: (type: string) => `The field is not of type ${type}`,
};
