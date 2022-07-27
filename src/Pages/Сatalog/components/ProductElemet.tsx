import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../globalTypes";
import { useActions } from "../../../Store/hooks/useActions";
import "./ProductElementStyle.scss";

export function ProductElement(props: {
  data: IProduct;
  index: string;
}): JSX.Element {
  const { moveToProduct } = useActions();
  const src = props.data.type === "vid" ? props.data.thumbnail : props.data.src;

  return (
    <>
      <Link to="/product">
        <div
          className="catalog-element"
          onClick={() => moveToProduct(props.index)}
          style={{ backgroundImage: `url("${src}")` }}
        ></div>
      </Link>
    </>
  );
}
