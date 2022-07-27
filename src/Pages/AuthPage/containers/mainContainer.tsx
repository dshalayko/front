import React, { useState } from "react";
import SignIn from "../components/SignIn";

const MainContainer = (): JSX.Element => {
  const [btnTheme, setBtnTheme] = useState("initial");

  const changeForm = (btnTheme: string) => {
    if (btnTheme === "initial") setBtnTheme("pressed");
  };

  return <SignIn btnTheme={btnTheme} changeForm={changeForm} />;
};

export default MainContainer;
