import * as Yup from "yup";
import { RequiredStringSchema } from "yup/lib/string";

export function getPasswordValidationSchema<T>(): RequiredStringSchema<
  string | undefined,
  Record<string, T>
> {
  return (
    Yup.string()
      .min(4, "Must be at least 4 characters long")
      .max(128, "Maximum length is 128 characters")
      .matches(
        /^[ -~]+$/,
        "Must be only latin letters, numbers, special\u00A0characters"
      )
      .matches(
        /^[^ ].+[^ ]$/,
        "There should be no spaces at the beginning and at the end"
      )
      // .matches(
      //   /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/,
      //   "Must be at least one\u00A0uppercase, one\u00A0lowercase, one\u00A0number and one\u00A0special\u00A0character"
      // )
      // .matches(
      //   /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/,
      //   "Must be at least one\u00A0uppercase, one\u00A0lowercase, one\u00A0number"
      // )
      .required("Required")
  );
}
