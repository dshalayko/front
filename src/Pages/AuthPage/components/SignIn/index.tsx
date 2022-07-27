import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Paper, Typography } from "@material-ui/core";

import Signup from "../SignUp";
import tel from "../../../../assets/Vector_tel.svg";
import lock from "../../../../assets/Vector_lock.svg";
import { passwordInfoValidation, validationSchema } from "./constants";
import Button from "../../../../Services/buttons";
import TypographyComponent from "../../../../Services/typography";
import logo from "../../../../assets/logo.svg";
import "./styles.scss";

import { useActions } from "../../../../Store/hooks/useActions";
import { login } from "../../../../API/userAPI";

import { Props, FormData, ResponseData } from "./types";

const SignIn = (props: Props): JSX.Element => {
  const { btnTheme, changeForm } = props;
  const [isRegistration, setIsRegistration] = useState("");
  const { setIsAuthTrue } = useActions();

  try {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get("tgID");
    if (foo) {
      sessionStorage.setItem("tgID", foo);
    }
  } catch (error) {
    console.log(error);
  }

  const click = async (values: FormData): Promise<void> => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: ResponseData | any = await login(
        values.phoneNumber,
        values.newPassword
      );

      if (!res.error) {
        res.verification ? setIsAuthTrue() : alert("Please, wait verification");
        return;
      }
      alert(res.data.message);
    } catch (e) {
      alert(e);
    }
  };

  if (isRegistration === "registration")
    return <Signup btnTheme={btnTheme} changeForm={changeForm} />;

  return (
    <Grid className="main-grid">
      <Paper className="main-page-paperStyle">
        <Grid className="signin-textContainer">
          <div className="auth-logo">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="auth-bold-white-text">Welcome Back!</h1>

          <Typography
            className="signin-whiteText"
            variant="caption"
            gutterBottom
          >
            Log in to your existant account
          </Typography>
          <Formik
            initialValues={{ phoneNumber: "", newPassword: "" }}
            validationSchema={validationSchema}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting }) => {
              click(values);
              setSubmitting(false);
            }}
          >
            {(formikProps) => (
              <Form className="signin-form">
                <div className="signin-login">
                  <Field
                    name="phoneNumber"
                    label="phoneNumber"
                    inputmask="+9999999999"
                    placeholder=" phone number"
                    autoCapitalize="none"
                    // transformvalue={(value: string) => value.trim()}
                    className="input-base"
                    formikprops={formikProps}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="error-red"
                  />
                  <img src={tel} id="login" alt="phone" />
                  <i id="login-plus" className="fas fa-plus text-color" />
                </div>

                <div className="signin-login">
                  <Field
                    name="newPassword"
                    label="New Password"
                    type="password"
                    placeholder=" password"
                    securetextentry="true"
                    formikprops={formikProps}
                    infovalidation={passwordInfoValidation}
                    className="input-base"
                  />
                  <ErrorMessage
                    name="newPassword"
                    component="div"
                    className="error-red"
                  />
                  <img src={lock} id="login" alt="phone" />
                </div>

                <Grid>
                  <div className="signin-underline-text">Forgot password?</div>
                </Grid>

                <Button
                  type="submit"
                  onClickFunction={() => changeForm(btnTheme)}
                  className="sign-btnStyle-pressed"
                  text="Sign in"
                />
              </Form>
            )}
          </Formik>

          <TypographyComponent
            firstText="Haven’t an account?  "
            secondText="Registration"
            onClickFunction={() => {
              setIsRegistration("registration");
            }}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SignIn;
