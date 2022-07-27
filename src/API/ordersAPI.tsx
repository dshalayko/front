import { $authHost } from "./index";
import { IOrder, IOrders } from "../globalTypes";

export const getOrders = async (): Promise<IOrders[]> => {
  let res: IOrders[] = [];
  await $authHost.get(`api/order/all`).then((resp) => {
    if (resp.data.status) {
      return res;
    }
    res = resp.data;
  });
  return res;
};

export const placeOrder = async (order: IOrder): Promise<unknown> => {
  const { data } = await $authHost.post(`api/order/create`, order);
  return data;
};
export const deleteOrder = async (id: number): Promise<unknown> => {
  const { data } = await $authHost.delete(`api/order/${id}`);
  return data;
};
export const updateOrder = async (id: number, status: string): Promise<unknown> => {
  const { data } = await $authHost.get(`api/order/update/${id}/${status}`);
  return data;
};
