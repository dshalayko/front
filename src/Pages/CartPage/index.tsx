import React, { useEffect } from "react";
import { useTypedSelector } from "../../Store/hooks/useTypedSelector";
import CartPage from "./components/CartPage";
import { useActions } from "../../Store/hooks/useActions";

export default function Cart(): JSX.Element {
  const { cartProducts } = useTypedSelector((state) => state.cart);
  const { updateCart, setVisibleTrue } = useActions();

  useEffect(() => {
    updateCart();
    setVisibleTrue();
  }, []);

  return (
    <>
      <CartPage data={cartProducts} />
    </>
  );
}
