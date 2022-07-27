import React, { useEffect } from "react";
import CheckoutProduct from "./components/CheckoutProduct";
import { useHistory } from "react-router";
import { IProduct } from "../../globalTypes";
import { useActions } from "../../Store/hooks/useActions";

export default function CheckoutPage(): JSX.Element {
  const history = useHistory();
  const { setVisibleTrue } = useActions();
  useEffect(() => {
    setVisibleTrue();
  }, []);

  return (
    <>
      <CheckoutProduct data={history.location.state as IProduct} />
    </>
  );
}
