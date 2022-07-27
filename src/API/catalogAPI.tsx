import { $authHost, $host } from "./index";
import {IDataC} from "../globalTypes";

export const getAllCategories = async (): Promise<IDataC> => {
  let res: IDataC = { catalogs: [] };
  await $host.get(`api/catalog/all`).then((resp) => {
    if (resp.data.status) {
      return res;
    }
    res = resp.data;
  });
  return res;
};

export const createNewProduct = async (formData: unknown): Promise<unknown> => {
  try {
    const { data } = await $authHost.post("api/catalog", formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: number): Promise<unknown> => {
  try {
    const { data } = await $authHost.delete(`api/catalog/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
