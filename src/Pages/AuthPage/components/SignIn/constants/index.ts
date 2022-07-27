import * as Yup from "yup";

import { getPasswordValidationSchema } from "../../../../../Services/getPasswordValidationSchema";

export const passwordInfoValidation = [
  { name: "At least 4 characters", validation: /^.{4,}$/ },
  // {name: 'At least 1 uppercase letter (A-Z)', validation: /(?=.*[A-Z])/},
  // {name: 'At least 1 lowercase letter (a-z)', validation: /(?=.*[a-z])/},
  // {name: 'At least one number (0-9)', validation: /(?=.*[0-9])/},

  // {
  //   name: 'At least one special character (!"#$%&\'()*+,-.:;<=>?@[\\]^_`{|}~)',
  //   validation: /(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/
  // }
];

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = Yup.object({
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  newPassword: getPasswordValidationSchema(),
});
