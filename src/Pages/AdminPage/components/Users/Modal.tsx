import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { IUser } from "../../../../globalTypes";

import { deleteUser, verificateUser } from "../../../../API/userAPI";

type Iprops = {
  fun: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
};

export default function Modal(props: Iprops): JSX.Element {
  const deleteBtn = async (id: number) => {
    const result = confirm("Are you sure?");
    result ? await deleteUser(id) : null;
    props.fun(false);
  };

  const applyBtn = async (id: number) => {
    await verificateUser(id);
    props.fun(false);
  };
  return (
    <div className="modal-container">
      <div className="modal-card">
        <div className="modal-exit" onClick={() => props.fun(false)}>
          <CloseRoundedIcon color="warning" fontSize="medium" />
        </div>

        <h1 className="modal-title">{props.user.telephone_number}</h1>
        <a href={props.user.src} target="_blank" rel="noreferrer">
          <img className="modal-img" src={props.user.src} alt="photo" />
        </a>
        <div className="modal-btn-group">
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => deleteBtn(props.user.id)}
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button onClick={() => applyBtn(props.user.id)} variant="contained">
              Apply
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
