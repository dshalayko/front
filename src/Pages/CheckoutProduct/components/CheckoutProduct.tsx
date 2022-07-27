import React, { useState } from "react";
import { IProduct } from "../../../globalTypes";
import { useActions } from "../../../Store/hooks/useActions";
import "./CheckoutProductStyle.scss";
import { useHistory } from "react-router";
import { CheckoutProductElement } from "./CheckoutProductElement";
import arrow from "../../../assets/arrow_back_green.svg";
import CheckoutSlider from "./CheckoutSlider";
import swal from "sweetalert";
import { getPriceAccordingToQuantity } from "./../../../Services/calculatePrice";

export default function CheckoutProduct(props: {
  data: IProduct;
}): JSX.Element {
  const [quantity, setQuantity] = useState<number>();
  const { updateCartItemQuantity } = useActions();
  const product = props.data;
  const history = useHistory();
  let modal = false;

  function changeQuantity(newQuantity: number, button: Element) {
    setQuantity(newQuantity);
    removeErrorMsg();
    changeChoiceButtonStyle(button);
  }

  function removeErrorMsg() {
    const errorMsg = document.getElementsByClassName(
      "checkout-container-error"
    )[0] as HTMLDivElement;
    errorMsg.style.display = "none";
  }

  function buyItem(product: IProduct, quantity: number) {
    if (quantity > 0) {
      updateCartItemQuantity(product, quantity);
      swal({
        text: "You have successfully added product to a cart",
        buttons: [false],
        timer: 2000,
      });
      history.push("/product");
    } else {
      const errorMsg = document.getElementsByClassName(
        "checkout-container-error"
      )[0] as HTMLDivElement;
      errorMsg.style.display = "flex";
    }
  }

  function openModal() {
    const element = document.getElementsByClassName(
      "checkout-quantity-choice"
    )[0] as HTMLDivElement;
    modal = !modal;
    if (element) {
      element.style.visibility = modal ? "inherit" : "hidden";
    }
  }

  function confirmQuantity(quantity: number) {
    setQuantity(quantity);
    removeErrorMsg();
    openModal();
    changeChoiceButtonName(quantity);
  }

  function changeChoiceButtonName(value: number) {
    const choiceText = document.getElementById("choice-text") as HTMLDivElement;
    const chosenNumber = document.getElementById(
      "chosen-number"
    ) as HTMLDivElement;
    const chosenTotal = document.getElementById(
      "chosen-total"
    ) as HTMLDivElement;
    const choiceLink = document.getElementsByClassName(
      "checkout-container-link"
    )[0] as HTMLLinkElement;
    const choiceButton = chosenNumber.parentElement as HTMLButtonElement;
    if (value > 0) {
      choiceText.style.display = "none";
      chosenNumber.style.display = "block";
      chosenTotal.style.display = "flex";
      choiceButton.disabled = true;
      choiceButton.style.pointerEvents = "none";
      choiceButton.style.color = "black";
      choiceLink.style.display = "block";
      changeChoiceButtonStyle(choiceButton);
    }
  }

  function changeChoiceButtonStyle(button: Element) {
    const activeButtons = Array.from(
      document.getElementsByClassName("checkout-active")
    );
    for (const item of activeButtons) {
      item.classList.remove("checkout-active");
    }
    button.classList.add("checkout-active");
  }

  return (
    <>
      <div className="checkout-nav">
        <img src={arrow}></img>
        <a href="/product">Back to products</a>
      </div>
      <div className="checkout-nav-mob">
        <a href="/product">
          <img src={arrow}></img>
        </a>
      </div>
      <div className="checkout-container">
        <div className="checkout-container-form">
          <div className="checkout-container-label">Select quantity</div>
          <CheckoutProductElement
            numberId=""
            totalId=""
            quantity={product.price[1].quantity}
            display="block"
            onClick={(e) => changeQuantity(product.price[1].quantity, e.currentTarget)}
            price={getPriceAccordingToQuantity(product, product.price[1].quantity)}
            choice={false}
          />
          <CheckoutProductElement
            numberId=""
            totalId=""
            quantity={product.price[2].quantity}
            display="block"
            onClick={(e) => changeQuantity(product.price[2].quantity, e.currentTarget)}
            price={getPriceAccordingToQuantity(product, product.price[2].quantity)}
            choice={false}
          />
          <CheckoutProductElement
            numberId=""
            totalId=""
            quantity={product.price[3].quantity}
            display="block"
            onClick={(e) => changeQuantity(product.price[3].quantity, e.currentTarget)}
            price={getPriceAccordingToQuantity(product, product.price[3].quantity)}
            choice={false}
          />
          <CheckoutProductElement
            numberId="chosen-number"
            totalId="chosen-total"
            quantity={Number(quantity)}
            display="none"
            onClick={openModal}
            price={getPriceAccordingToQuantity(product, Number(quantity))}
            choice={true}
          />

          <a
            href="#"
            className="checkout-container-link"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          >
            Change quantity
          </a>
          <div className="checkout-container-error">Select quantity</div>
          <button
            className="checkout-container-button"
            onClick={() => buyItem(product, Number(quantity))}
          >
            Buy
          </button>
        </div>
      </div>
      <CheckoutSlider confirmQuantity={confirmQuantity} />
    </>
  );
}
