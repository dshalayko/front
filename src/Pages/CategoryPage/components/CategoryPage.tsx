import React from "react";
import { ICategory } from "../../../globalTypes";
import { CategoryElement } from "./CategoryElemet";
import "./CategoryPageStyle.scss";

export default function CategoryPage(props: { data: ICategory[] }): JSX.Element {
  const categories = props.data ? props.data : [];
    console.log(categories);
  return (
    <>
      <div className="catalog-container" style={{textAlign:"center"}}>
        {categories.map((element, i) => {
          return <CategoryElement data={element} index={`${i}`} key={i} />;
        })}
      </div>
    </>
  );
}
