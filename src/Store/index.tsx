import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/AuthReducer";
import navbarReducer from "./reducers/NavbarReducer";
import goodsReducer from "./reducers/GoodsReducer";
import catalogsReducer from "./reducers/CatalogsReducer";
import cartReducer from "./reducers/CartReducer";
import newFileReducer from "./reducers/NewFileReducer";
import checkoutReduser from "./reducers/CheckoutReducer";
import ordersReducer from "./reducers/OrdersReducer";
import managersReducer from "./reducers/ManagersReducer";
import usersReducer from "./reducers/UsersReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  navbar: navbarReducer,
  goods: goodsReducer,
  catalogs: catalogsReducer,
  cart: cartReducer,
  newFile: newFileReducer,
  checkout: checkoutReduser,
  orders: ordersReducer,
  managers: managersReducer,
  users: usersReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
