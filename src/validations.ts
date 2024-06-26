import { InvalidParamsError } from "./exceptions";

export function validateLimit(value: number) {
  if (value > 500 || value < 1) {
    throw new InvalidParamsError(
      "Limit must be between 1 and 500 and must be int instance",
      "limit",
      value,
    );
  }
}

export function validateJurisdiction(
  allow_empty: boolean,
  value: string | undefined,
) {
  if (!allow_empty && !value) {
    throw new InvalidParamsError(
      "jurisdiction is empty, but its not allowed",
      "jurisdiction",
      value,
    );
  }
}
