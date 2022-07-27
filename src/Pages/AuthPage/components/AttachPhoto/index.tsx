import React, { useState } from "react";
import SignIn from "../SignIn";
import { Grid, Paper, TextField, Typography } from "@material-ui/core";

import Mate from "../../../../assets/MaskGroup.svg";
import PasswordConfirm from "../PasswordConfirm";
import Button from "../../../../Services/buttons";
import TypographyComponent from "../../../../Services/typography";
import Signup from "../SignUp";

import { useActions } from "../../../../Store/hooks/useActions";

import "./styles.scss";

type Props = {
  btnTheme: string;
  changeForm: (item: string) => void;
};

const AttachPhoto = (props: Props): JSX.Element => {
  const { btnTheme, changeForm } = props;
  const [isSignIn, setIsSignIn] = useState("");
  const [isSignUp, setIsSignUp] = useState("");
  const [isNextStep, setNextStep] = useState("");
  const [Sfile, setFile] = useState<File>();
  const { setNewFile } = useActions();
  // const { file } = useTypedSelector((state) => state.newFile);

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (Sfile) setNextStep("nextStep");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const addFile = e.nativeEvent.target.files[0];
    const sFileName = addFile.name;
    const sFileExtension = sFileName.split(".").pop().toLowerCase();
    const extensionList = ["jpg", "jpeg", "png", "bmp", "webp"];
    if (!extensionList.includes(sFileExtension)) {
      alert("Attach the photo file");
    } else {
      setNewFile(addFile);
      setFile(addFile);
      console.log(addFile);
    }
  };

  if (isSignIn === "signin")
    return <SignIn btnTheme={btnTheme} changeForm={changeForm} />;
  if (isNextStep === "nextStep")
    return <PasswordConfirm btnTheme={btnTheme} changeForm={changeForm} />;
  if (isSignUp === "signup")
    return <Signup btnTheme={btnTheme} changeForm={changeForm} />;

  return (
    <Grid className="main-grid">
      <Paper className="main-page-paperStyle">
        <Grid className="attachPhoto-Container">
          <Typography className="backBtn">
            <i
              className="fas fa-arrow-left"
              onClick={() => setIsSignUp("signup")}
            />
          </Typography>
          <h1 className="auth-bold-white-text">Step 2</h1>
          <Typography
            className="signin-whiteText"
            variant="caption"
            gutterBottom
          >
            Attach a selfie with a document, as shown at the picture
          </Typography>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="step2-attach-photo">
              <input
                className="fileInput"
                type="file"
                onChange={(e) => handleImageChange(e)}
              />
              <TextField
                fullWidth
                placeholder={Sfile ? Sfile.name : "Attach the photo"}
                className="field"
              />

              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="submitButton"
              >
                <i id="rotate" className="fas fa-paperclip text-color" />
              </button>
            </div>

            <img src={Mate} alt="man" className="step2-mate" />

            <Button
              type="button"
              onClickFunction={() => {
                Sfile ? setNextStep("nextStep") : setNextStep("");
              }}
              className="step2-btnStyle-attach-photo"
              text="Next step"
            />

            <TypographyComponent
              firstText="Already have an account?  "
              secondText="Sign in"
              onClickFunction={() => setIsSignIn("signin")}
            />
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default AttachPhoto;
