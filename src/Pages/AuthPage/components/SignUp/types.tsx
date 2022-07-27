export type Props = {
  btnTheme: string;
  changeForm: (item: string) => void;
};
export type FormData = {
  phoneNumber: string;
};

export type ResponseData = {
  status: number;
  message: string;
};
