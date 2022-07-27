import React from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../../globalTypes";
// import { useActions } from "../../../Store/hooks/useActions";
import "./ProductElementStyle.scss";

export function CategoryElement(props: {
  data: ICategory;
  index: string;
}): JSX.Element {
  // const { moveToProduct } = useActions();
  // const id = props.data.id;
  const src = props.data.src;
  const name = props.data.name;

  return (
    <>
      <Link to="/catalog">
          {/*${name}*/}
        <div
          className="catalog-element"
          style={{ backgroundImage: `url("${src}")` }}
        >
        </div>
          <span style={{color:"white"}}>{name}</span>
      </Link>
    </>
  );
}
