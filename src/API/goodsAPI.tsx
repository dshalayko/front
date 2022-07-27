import { $authHost, $host } from "./index";
import { IData } from "../globalTypes";

export const getAllProduct = async (): Promise<IData> => {
  let res: IData = { goods: [] };
  await $host.get(`api/goods/all`).then((resp) => {
    if (resp.data.status) {
      return res;
    }
    res = resp.data;
  });
  return res;
};

export const getProduct = async (id: unknown): Promise<IData> => {
  let res: IData = { goods: [] };
  await $host.get(`api/goods/all/${id}`).then((resp) => {
    if (resp.data.status) {
      return res;
    }
    res = resp.data;
  });
  return res;
};

export const createNewProduct = async (formData: unknown): Promise<unknown> => {
  try {
    const { data } = await $authHost.post("api/goods", formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: number): Promise<unknown> => {
  try {
    const { data } = await $authHost.delete(`api/goods/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
