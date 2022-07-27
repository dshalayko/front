import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";
import { IUser } from "../globalTypes";

type Itoken = {
  id: number;
  telephone_number: string;
  role: string;
  verification: boolean;
  telegram_user_id: string;
  iat: number;
  exp: number;
};

export const registration = async (formData: unknown): Promise<unknown> => {
  try {
    const { data } = await $host.post("api/user/registration", formData);
    if (data.token) {
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("userTgID", data.userTgID);
      const res: Itoken = jwt_decode(data.token);
      sessionStorage.setItem("isVerified", JSON.stringify(res.verification));
      return res;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (
  phone: string,
  password: string
): Promise<unknown> => {
  const { data } = await $host.post("api/user/login", {
    telephone_number: phone,
    password: password,
  });
  const res = { error: false, data };

  if (data.token) {
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("userTgID", data.userTgID);
    const tempRes: Itoken = jwt_decode(data.token);
    sessionStorage.setItem("isVerified", JSON.stringify(tempRes.verification));
    return tempRes.verification ? tempRes : res;
  } else {
    res.error = true;
    return res;
  }
};

export const check = async (): Promise<unknown> => {
  const { data } = await $authHost.get("api/user/auth");
  sessionStorage.setItem("token", data.token);
  const res: Itoken = jwt_decode(data.token);
  sessionStorage.setItem("isVerified", JSON.stringify(res.verification));
  sessionStorage.setItem("userTgID", res.telegram_user_id);
  return res;
};

export const checkLogin = async (phoneNumber: string): Promise<unknown> => {
  try {
    const { data } = await $host.post("api/user/cheak_login", {
      telephone_number: phoneNumber,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const verificateUser = async (id: number): Promise<unknown> => {
  try {
    const { data } = await $authHost.post(`api/user/${id}/verificate`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: number): Promise<unknown> => {
  try {
    const { data } = await $authHost.delete(`api/user/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUnverifiedUsers = async (): Promise<IUser[]> => {
  let res: IUser[] = [];
  await $authHost.get(`api/user/unverified`).then((resp) => {
    if (resp.data.status) {
      return res;
    }
    res = resp.data;
  });
  return res;
};
