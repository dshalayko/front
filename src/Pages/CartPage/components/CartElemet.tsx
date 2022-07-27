import React from "react";
import { ICartItem } from "../../../globalTypes";
import { useActions } from "../../../Store/hooks/useActions";
import "./CartElementStyle.scss";
import { getPriceAccordingToQuantity } from "./../../../Services/calculatePrice";

export function CartElement(props: {
  data: ICartItem;
  index: string;
}): JSX.Element {
  const { updateCartItemQuantity, clearCartItem } = useActions();

  function updateOrRemove(quantity: number) {
    if (props.data.quantity + quantity == 0) {
      openDeleteModal();
    } else {
      updateCartItemQuantity(props.data.product, quantity);
    }
  }

  function openDeleteModal() {
    const element = document.getElementById(`delete-modal${props.index}`);
    if (element) {
      element.style.display = "flex";
    }
  }

  function closeDeleteModal() {
    const element = document.getElementById(`delete-modal${props.index}`);
    if (element) {
      element.style.display = "none";
    }
  }

  function removeElement() {
    clearCartItem(props.data.product);
    closeDeleteModal();
  }

  return (
    <>
      <div className="cart-element">
        <div className="cart-element-info">
          {props.data.product.type === "vid" ? (
            <div
              className="cart-item-image"
              style={{
                backgroundImage: `url("${props.data.product.thumbnail}")`,
              }}
            ></div>
          ) : (
            <div
              className="cart-item-image"
              style={{ backgroundImage: `url("${props.data.product.src}")` }}
            ></div>
          )}
          <div className="cart-element-price">
            <div className="element-total-price">
              ${getPriceAccordingToQuantity(props.data.product, props.data.quantity) * props.data.quantity}
            </div>
            <div className="per-piece-price">
              {getPriceAccordingToQuantity(props.data.product, props.data.quantity)} per piece
            </div>
          </div>
        </div>
        <div className="element-count">
          <button
            className="element-count-button"
            onClick={() => updateOrRemove(-1)}
          >
            &ndash;
          </button>
          <div className="element-total-count">{props.data.quantity}</div>
          <button
            className="element-count-button"
            onClick={() => updateOrRemove(1)}
          >
            +
          </button>
        </div>
        <button
          className="cart-element-remove"
          onClick={openDeleteModal}
        ></button>
      </div>
      <div
        id={`delete-modal${props.index}`}
        className="cart-element-delete-modal"
      >
        <div className="cart-element-delete-modal-content">
          <div className="cart-element-delete-modal-title">Delete</div>
          <div className="cart-element-delete-modal-text">
            Do you really want to delete the item?
          </div>
          <div className="cart-element-delete-modal-buttons">
            <button
              className="cart-element-delete-modal-button"
              onClick={closeDeleteModal}
            >
              Cancel
            </button>
            <button
              className="cart-element-delete-modal-button"
              onClick={removeElement}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
