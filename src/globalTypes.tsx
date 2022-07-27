export interface IProduct {
  addDate: string;
  type: string;
  src: string;
  name: string;
  price: Price[];
  thumbnail: string;
  id: number;
}

export interface ICategory {
  src: string;
  name: string;
  id: number;
}

type Price = {
  quantity: number;
  amount: number;
};

export interface IData {
  goods: IProduct[];
}
export interface IDataC {
  catalogs: ICategory[];
}

export interface ICartData {
  items: ICartItem[];
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface IToken {
  id: number;
  role: string;
  telephone_number: string;
}

export interface IProductList {
  product_id: string;
  product_name: string;
  quantity: number;
  total_price: number;
}
export interface IOrders {
  id: number;
  add_time: string;
  user_ID: string;
  manager_ID: string;
  manager_Telegramm_ID: string;
  order_status: boolean;
  product_list: IProductList[];
  createdAt: string;
  updatedAt: string;
}
export interface IOrder {
  user_ID: string;
  product_list: IProductList[];
  total_price: number;
}
export interface IManager {
  id: number;
  telephone_number: string;
  total_price: number;
  telegram_user_id: string;
  order_queue: number;
  createdAt: string;
  updatedAt: string;
  order_list: IOrders[];
}

export interface IUser {
  id: number;
  telephone_number: string;
  password: string;
  telegram_user_id: string;
  verification: boolean;
  file_name: string;
  src: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
