import React, { useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Vector from "../../../../assets/Vector.svg";
import { initialState, validationSchema } from "./constants";
import { passwordInfoValidation } from "../SignIn/constants";
import Button from "../../../../Services/buttons";
import TypographyComponent from "../../../../Services/typography";
import SignIn from "../SignIn";

import { registration } from "../../../../API/userAPI";
import { useTypedSelector } from "../../../../Store/hooks/useTypedSelector";
// import { useActions } from "../../../../Store/hooks/useActions";

import "./styles.scss";
import AttachPhoto from "../AttachPhoto";

type Props = {
  btnTheme: string;
  changeForm: (item: string) => void;
};

type FormData = {
  newPassword: string;
  repeatPassword: string;
};

const PasswordConfirm = (props: Props): JSX.Element => {
  const { btnTheme, changeForm } = props;
  const [isSignIn, setIsSignIn] = useState("");
  const [isAttachPhoto, setIsAttachPhoto] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isNextStep, setNextStep] = useState("");
  const { file } = useTypedSelector((state) => state.newFile);
  // const { setIsAuthTrue } = useActions();

  const click = async (values: FormData): Promise<void> => {
    try {
      const phoneNumber = sessionStorage.getItem("newPhoneNumber");
      const password = values.newPassword;
      const telegrammID = sessionStorage.getItem("tgID");
      const role = "USER";
      if (phoneNumber && password && telegrammID && role && file) {
        const formData = new FormData();
        formData.append("telephone_number", phoneNumber);
        formData.append("password", password);
        formData.append("telegram_user_id", telegrammID);
        formData.append("role", role);
        formData.append("img", file);
        await registration(formData).then(() => {
          alert(
            "Registration completed successfully. Please wait for data verification"
          );
          setIsSignIn("signin");
          // setIsAuthTrue();
        });
      }
    } catch (e) {
      alert(e);
    }
  };

  if (isSignIn === "signin")
    return <SignIn btnTheme={btnTheme} changeForm={changeForm} />;
  if (isAttachPhoto === "attachPhoto")
    return <AttachPhoto btnTheme={btnTheme} changeForm={changeForm} />;

  return (
    <Grid className="main-grid">
      <Paper className="main-page-paperStyle">
        <Grid className="signin-textContainer">
          <Typography className="backBtn">
            <i
              className="fas fa-arrow-left"
              onClick={() => setIsAttachPhoto("attachPhoto")}
            />
          </Typography>
          {/*<div className='auth-logo'>LOGO NAME</div>*/}
          <h1 className="auth-bold-white-text">Step 3</h1>
          <Typography
            className="signin-whiteText"
            variant="caption"
            gutterBottom
          >
            Enter your password
          </Typography>

          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            validateOnMount={true}
            onSubmit={(values, { setSubmitting }) => {
              click(values);
              setSubmitting(false);
            }}
          >
            {(formikProps) => (
              <Form>
                <div className="signin-login">
                  <Field
                    name="newPassword"
                    type="password"
                    label="New Password"
                    secureTextEntry={true}
                    formikProps={formikProps}
                    infoValidation={passwordInfoValidation}
                    className="input-base"
                  />
                  <ErrorMessage
                    name="newPassword"
                    className="error-red"
                    component="div"
                  />
                  <img src={Vector} id="lock" alt="Lock" />
                </div>

                <div className="signin-login">
                  <Field
                    name="repeatPassword"
                    label="Repeat Password"
                    type="password"
                    secureTextEntry={true}
                    formikProps={formikProps}
                    infoValidation={true}
                    className="input-base"
                  />
                  <ErrorMessage
                    name="repeatPassword"
                    className="error-red"
                    component="div"
                  />
                  <img src={Vector} id="lock" alt="Lock" />
                </div>

                <Button
                  type="submit"
                  onClickFunction={() => setNextStep("nextStep")}
                  className="sign-btnStyle-pressed"
                  text="Registration"
                />
              </Form>
            )}
          </Formik>

          <TypographyComponent
            firstText="Already have an account?  "
            secondText="Sign in"
            onClickFunction={() => setIsSignIn("signin")}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PasswordConfirm;
