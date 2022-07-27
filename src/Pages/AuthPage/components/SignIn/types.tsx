export type Props = {
  btnTheme: string;
  changeForm: (item: string) => void;
};
export type FormData = {
  phoneNumber: string;
  newPassword: string;
};

type TokenData = {
  id: number;
  telephone_number: string;
  role: string;
  iat: number;
  exp: number;
};
type ErrorData = {
  status: number;
  message: string;
};

export type ResponseData = {
  data: TokenData | ErrorData;
  error: boolean;
};