import * as GoodsActionCreators from "./goods";
import * as CatalogActionCreators from "./catalogs";
import * as AuthsActionCreators from "./auth";
import * as NavbarActionCreators from "./navbar";
import * as CartActionCreators from "./cart";
import * as NewFileActionCreators from "./newFile";
import * as OrdersActionCreators from "./orders";
import * as ManagersActionCreators from "./managers";
import * as UsersActionCreators from "./users";

export default {
  ...GoodsActionCreators,
  ...CatalogActionCreators,
  ...AuthsActionCreators,
  ...NavbarActionCreators,
  ...CartActionCreators,
  ...NewFileActionCreators,
  ...OrdersActionCreators,
  ...ManagersActionCreators,
  ...UsersActionCreators,
};
