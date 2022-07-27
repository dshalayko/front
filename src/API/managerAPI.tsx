import { $authHost } from "./index";
import { IManager } from "../globalTypes";

export const createNewManager = async (tel: string): Promise<unknown> => {
  const sendData = { telephone_number: tel };
  try {
    const { data } = await $authHost.post("api/manager/create", sendData);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteNewManager = async (tel: string): Promise<unknown> => {
  const sendData = { telephone_number: tel };
  try {
    const { data } = await $authHost.post("api/manager/delete", sendData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllManagers = async (): Promise<IManager[]> => {
  let res: IManager[] = [];
  await $authHost.get("api/manager/all").then((resp) => {
    if (resp.data.status) {
      return res;
    }
    res = resp.data;
  });
  return res;
};
