import React from "react";
import { ICartItem, IOrder, IProductList } from "../../../globalTypes";
import { CartElement } from "./CartElemet";
import "./CartPageStyle.scss";
import arrow from "../../../assets/arrow_back_green.svg";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useActions } from "../../../Store/hooks/useActions";
import swal from "sweetalert";
import { getPriceAccordingToQuantity } from "./../../../Services/calculatePrice";

export default function CatalogPage(props: { data: ICartItem[] }): JSX.Element {
  const cartItems = props.data;
  const { placeAnOrder } = useActions();
  const history = useHistory();

  const totalPrice = cartItems.reduce(
    (acummulator, item) =>
      acummulator + getPriceAccordingToQuantity(item.product, item.quantity) * item.quantity,
    0
  );

  function placeOrder() {
    const productListForOrder: IProductList[] = [];
    cartItems.forEach((item) => {
      const productList: IProductList = {
        product_id: `${item.product.id}`,
        product_name: item.product.name,
        quantity: item.quantity,
        total_price: item.quantity * getPriceAccordingToQuantity(item.product, item.quantity),
      };
      productListForOrder.push(productList);
    });
    const order: IOrder = {
      user_ID: sessionStorage.getItem("userTgID") as string,
      product_list: productListForOrder,
      total_price: totalPrice,
    };
    placeAnOrder(order);
    swal({
      text: "You have successfully placed an order",
      buttons: [false],
      timer: 2000,
    });
    history.push("/product");
  }

  return (
    <>
      <div className="cart-arrow">
        <button onClick={history.goBack}>
          <img src={arrow}></img>
        </button>
      </div>
      <div className="cart-header">
        <div className="cart-nav">
          <a href="/product">Main page</a>
          <span>&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;</span>
          <Link to="/cart">Cart</Link>
        </div>
        <div className="cart-label">Cart</div>
      </div>
      <div className="cart-container">
        {cartItems.length > 0 ? (
          <>
            <div className="cart-elements">
              {cartItems.map((element, i) => {
                return <CartElement data={element} index={`${i}`} key={i} />;
              })}
            </div>
            <div className="total-price">
              <div className="total-price-text">
                <div>Total price:&nbsp;</div>
                <div className="cart-total-price">${totalPrice}</div>
              </div>
              <div style={{ alignSelf: "center", width: "80%" }}>
                {totalPrice < 500 ? (<>
                      <span>
                       Minimum order amount 500$
                      </span>
                      <button className="cart-button">
                        <a href="/product">Go to the catalog</a>
                      </button>
                    </>
                ):(
                    <button className="cart-button" onClick={placeOrder}>
                      PLACE AN ORDER
                    </button>
                )}

              </div>
            </div>
          </>
        ) : (
          <div className="cart-empty">
            <div className="cart-empty-label">
              You have not selected a product yet
            </div>
            <button className="cart-button">
              <a href="/product">Go to the catalog</a>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
