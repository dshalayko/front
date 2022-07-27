import React, { useState } from "react";
import "./Style.scss";
import TextField from "@mui/material/TextField";
import { Container, makeStyles } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createNewProduct } from "../../../../API/goodsAPI";
import InpytCard from "./InputCard";

export default function index(): JSX.Element {
  const clearForm = () => {
    const nImput = document.getElementById("name-input");
    if (nImput) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      nImput.value = "";
    }
    const cImput = document.getElementById("catalog_id-input");
    if (cImput) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      cImput.value = "";
    }
    const pImput = document.getElementById("price-input");
    if (pImput) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      pImput.value = "0";
    }
    const fImput = document.getElementById("file-input");
    if (fImput) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fImput.value = "";
    }
  };
  const useStyles = makeStyles({
    field: {
      marginTop: 1,
      marginBottom: 20,
      display: "block",
      maxWidth: "75%",
    },
    input: {
      marginTop: 10,
      marginBottom: 20,
      display: "block",
      marginRight: "auto",
      marginLeft: "auto",
    },
  });
  const classes = useStyles();

  const [name, setName] = useState("");
  const [catalog_id, setCatalog_id] = useState("");
  const [price, setPrice] = useState([{ quantity: 1, amount: 0 }]);
  const [file, setFile] = useState<File>();
  const [type, setType] = useState("img");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const inputFile = e.nativeEvent.target.files[0];
    const fileType = inputFile.type.split("/")[0];
    if (fileType == "video") {
      setType("vid");
    }
    setFile(inputFile);
  };

  // const temp111 = [
  //   { quantity: 1, amount: 20 },
  //   { quantity: 50, amount: 18 },
  //   { quantity: 150, amount: 16 },
  //   { quantity: 250, amount: 15 },
  // ];

  const createFormData = () => {
    if (name && price && catalog_id && file) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("catalog_id", catalog_id);
      formData.append("price", JSON.stringify(price));
      formData.append("type", type);
      formData.append("img", file);
      return formData;
    } else {
      console.log("formData error");
      return null;
    }
  };

  const sendData = async () => {
    const data = createFormData();
    if (data) {
      const res = await createNewProduct(data);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (res.status) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        alert(res.message);
        setName("");
        setCatalog_id("");
        setPrice([{ quantity: 1, amount: 0 }]);
        setFile(undefined);
        clearForm();
        console.log(res);
        return;
      }
      setName("");
      setCatalog_id("");
      setPrice([{ quantity: 1, amount: 0 }]);
      setFile(undefined);
      clearForm();
      alert("Create successfully");
    }
  };

  return (
    <Container className="new-product-container">
      <h1>Create new product</h1>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": {
            mt: 1,
            width: "100%",
            display: "flex",
            // alignItems: "center",
            mr: "auto",
            ml: "auto",
          },
        }}
      >
        <TextField
          className={classes.field}
          onChange={(e) => setName(e.target.value)}
          id="name-input"
          label="Add name"
          variant="filled"
          required
          size="small"
          InputProps={{ disableUnderline: true }}
        />

        <TextField
            className={classes.field}
            onChange={(e) => setCatalog_id(e.target.value)}
            id="catalog_id-input"
            label="select category"
            required
            variant="filled"
            size="small"
            InputProps={{ disableUnderline: true }}
        />
        {/* <TextField
          className={classes.field}
          onChange={(e) => setPrice(e.target.value)}
          id="price-input"
          label="Add price"
          type="number"
          required
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          defaultValue="0"
          size="small"
          InputProps={{ disableUnderline: true }}
        /> */}

        <InpytCard setPrice={setPrice} />

        <input
          accept="image/* , video/*"
          className={classes.input}
          type="file"
          id="file-input"
          onChange={(e) => handleFileChange(e)}
        />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              sendData();
            }}
          >
            Add
          </Button>
          <Button
            variant="outlined"
            color="error"
            type="reset"
            onClick={() => {
              setName("");
              setPrice([{ quantity: 1, amount: 0 }]);
              setFile(undefined);
            }}
          >
            Cancel
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
