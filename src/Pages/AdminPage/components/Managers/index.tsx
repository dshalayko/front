import React, { useEffect, useState } from "react";
import "./Style.scss";

import Loader from "../../../../Components/Loader/index";
import { useTypedSelector } from "../../../../Store/hooks/useTypedSelector";
import { useActions } from "../../../../Store/hooks/useActions";
import { createNewManager, deleteNewManager } from "../../../../API/managerAPI";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function index(): JSX.Element {
  const { managers, loading, error } = useTypedSelector(
    (state) => state.managers
  );
  const { fetchManagers } = useActions();

  const [tNumber, setTNumber] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTNumber(event.target.value);
  };

  const createBtnClicked = async () => {
    const res = await createNewManager(tNumber);
    setTNumber("");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (res.status) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      alert(res.message);
      return;
    }
    alert("Success");
    fetchManagers();
  };

  const deleteBtnClicked = async (tel: string) => {
    const answer = confirm(`Are you sure to delete this manager ${tel}?`);
    if (answer) {
      const res = await deleteNewManager(tel);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (res.status) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        alert(res.message);
        return;
      }
      alert("Success");
      fetchManagers();
    }
  };

  useEffect(() => {
    fetchManagers();
  }, []);
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="managers-container">
      <div className="new-manager-card">
        <Typography variant="h6" margin={"normal"} sx={{ textAlign: "center" }}>
          Create new manager
        </Typography>
        <div className="new-manager-input-box">
          <TextField
            label="Telephone number"
            value={tNumber}
            onChange={handleChange}
            color="success"
            size="small"
            sx={{ mr: "5px" }}
          />
          <Button
            variant="contained"
            color="success"
            disabled={tNumber ? false : true}
            onClick={() => createBtnClicked()}
          >
            Create
          </Button>
        </div>
      </div>
      {managers.length ? (
        <div className="all-managers-card">
          {managers?.map((el, index) => (
            <div className="manager-card" key={index}>
              <div>№{index + 1}</div>
              <div>{el.telephone_number}</div>
              <div>Active ordes: {el.order_queue}</div>
              <IconButton
                aria-label="delete"
                size="small"
                color="error"
                onClick={() => deleteBtnClicked(el.telephone_number)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="no-managers-title">Managers not found</h1>
      )}
    </div>
  );
}
