import * as Yup from 'yup';

import {getPasswordValidationSchema} from '../../../../../Services/getPasswordValidationSchema';

export const validationSchema = Yup.object({
  newPassword: getPasswordValidationSchema(),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
});

export const initialState = { newPassword: '', repeatPassword: '' };
