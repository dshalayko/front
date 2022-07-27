import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Style.scss";

import Loader from "react-loader-spinner";
export default class LoaderElement extends React.Component {
  render(): JSX.Element {
    return (
      <div className="loader">
        <h1 className="loader-title">Loading...</h1>
        <Loader type="Watch" color="white" height={180} width={180} />
      </div>
    );
  }
}
