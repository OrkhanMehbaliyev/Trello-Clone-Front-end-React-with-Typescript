import { RegisterOptions } from "react-hook-form";
import { validationMessages } from "./helpers/messages";

type ValidationFunction = (value: unknown) => boolean | string;

class BaseValidation {
  protected baseValidations: ValidationFunction[] = [];
  protected rules: RegisterOptions;

  constructor(
    baseValidations: ValidationFunction[] = [],
    rules: RegisterOptions = {}
  ) {
    this.baseValidations = baseValidations;
    this.rules = rules;
  }

  protected createValidationFunction(
    condition: (value: unknown) => boolean | string
  ): ValidationFunction {
    return (value: unknown) => condition(value);
  }

  addValidation(fn: (value: unknown) => boolean | string) {
    this.baseValidations.push(this.createValidationFunction(fn));
    return this;
  }

  end() {
    this.rules.validate = (value: unknown) => {
      for (const fn of this.baseValidations) {
        const output = fn(value);
        if (typeof output == "string") return output;
      }
      return true;
    };
    return this.rules as object;
  }
}

class NumberValidation extends BaseValidation {
  min(limit: number, message?: string) {
    this.addValidation(
      (value) =>
        Number(value) >= limit ||
        message ||
        validationMessages.minimumMessage("This field", limit)
    );
    return this;
  }

  max(limit: number, message?: string) {
    this.addValidation(
      (value) =>
        Number(value) <= limit ||
        message ||
        validationMessages.maximumMessage("This field", limit)
    );
    return this;
  }

  pattern(regex: RegExp, message?: string) {
    this.addValidation(
      (value) =>
        (typeof value === "string" && regex.test(value)) ||
        message ||
        validationMessages.patternErrorMessage("This field")
    );
    return this;
  }
}

class StringValidation extends BaseValidation {
  minLength(limit: number, message?: string) {
    this.addValidation(
      (value) =>
        (typeof value === "string" && value.length >= limit) ||
        message ||
        validationMessages.minLengthMessage("This field", limit)
    );
    return this;
  }

  maxLength(limit: number, message?: string) {
    this.addValidation(
      (value) =>
        (typeof value === "string" && value.length <= limit) ||
        message ||
        validationMessages.maxLengthMessage("This field", limit)
    );
    return this;
  }

  pattern(regex: RegExp, message?: string) {
    this.addValidation(
      (value) =>
        (typeof value === "string" && regex.test(value)) ||
        message ||
        validationMessages.patternErrorMessage("This field")
    );
    return this;
  }
}

class Validation extends BaseValidation {
  required(message?: string) {
    this.rules.required = {
      value: true,
      message: message || validationMessages.requiredMessage("This field"),
    };
    return this;
  }

  number(message?: string) {
    this.addValidation(
      (value) =>
        !isNaN(Number(value)) ||
        message ||
        validationMessages.typeErrorMessage("number")
    );
    return new NumberValidation(this.baseValidations, this.rules);
  }

  string(message?: string) {
    this.addValidation(
      (value) =>
        typeof value === "string" ||
        message ||
        validationMessages.typeErrorMessage("string")
    );
    return new StringValidation(this.baseValidations, this.rules);
  }

  boolean(message?: string) {
    this.addValidation(
      (value) =>
        typeof value === "boolean" ||
        message ||
        validationMessages.typeErrorMessage("boolean")
    );
    return this;
  }
}

const SchemaWorker = (): Validation => {
  return new Validation();
};

export default SchemaWorker;
