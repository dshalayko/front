import React, { useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";

import SignIn from "../SignIn";
import AttachPhoto from "../AttachPhoto";
import { validationSchema } from "./constants";
import Button from "../../../../Services/buttons";
import TypographyComponent from "../../../../Services/typography";
import { Props, FormData, ResponseData } from "./types";
import { checkLogin } from "../../../../API/userAPI";

import "./styles.scss";
import tel from "../../../../assets/Vector_tel.svg";

const Signup = (props: Props): JSX.Element => {
  const { btnTheme, changeForm } = props;
  const [isSignIn, setIsSignIn] = useState("");
  const [isNextStep, setNextStep] = useState("");

  const click = async (values: FormData): Promise<void> => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: ResponseData | any = await checkLogin(values.phoneNumber);
      if (res.status === 200) {
        sessionStorage.setItem("newPhoneNumber", values.phoneNumber);
        setNextStep("nextStep");
        setIsSignIn("");
        return;
      }
      alert(res.message);
    } catch (e) {
      alert(e);
    }
  };

  if (isSignIn === "signin")
    return <SignIn btnTheme={btnTheme} changeForm={changeForm} />;
  if (isNextStep === "nextStep")
    return <AttachPhoto btnTheme={btnTheme} changeForm={changeForm} />;

  return (
    <Grid className="main-grid">
      <Paper className="main-page-paperStyle">
        <Grid className="signin-textContainer">
          <h1 className="auth-bold-white-text">{"Let's get started!"}</h1>
          <Typography
            className="signin-whiteText"
            variant="caption"
            gutterBottom
          >
            Enter your phone
          </Typography>
          <Formik
            initialValues={{ phoneNumber: "" }}
            validationSchema={validationSchema}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting }) => {
              click(values);
              // setNextStep("nextStep");
              // setIsSignIn("");
              // console.log(values);
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }}
          >
            {(formikProps) => (
              <Form>
                <div className="signin-login">
                  <Field
                    name="phoneNumber"
                    label="phoneNumber"
                    placeholder=" your phone number"
                    autoCapitalize="none"
                    // transformValue={(value: string) => value.trim()}
                    className="input-base"
                    formikProps={formikProps}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    className="error-red"
                    component="div"
                  />
                  <img src={tel} id="login" alt="phone" />
                  <i id="login-plus" className="fas fa-plus text-color" />
                </div>

                <Button
                  type="submit"
                  onClickFunction={() => changeForm(btnTheme)}
                  className="sign-btnStyle-phone-page"
                  text="Next step"
                />

                <TypographyComponent
                  firstText="Already have an account?  "
                  secondText="Sign in"
                  onClickFunction={() => setIsSignIn("signin")}
                />
              </Form>
            )}
          </Formik>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Signup;
