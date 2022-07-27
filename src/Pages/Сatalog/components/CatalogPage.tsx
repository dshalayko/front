import React from "react";
import { IProduct } from "../../../globalTypes";
import { ProductElement } from "./ProductElemet";
import "./CatalogPageStyle.scss";

export default function CatalogPage(props: { data: IProduct[] }): JSX.Element {
  const products = props.data ? props.data : [];

  return (
    <>
      <div className="catalog-container">
        {products.map((element, i) => {
          return <ProductElement data={element} index={`${i}`} key={i} />;
        })}
      </div>
    </>
  );
}
