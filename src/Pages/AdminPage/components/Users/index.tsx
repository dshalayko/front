import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../../../Store/hooks/useTypedSelector";
import { useActions } from "../../../../Store/hooks/useActions";
import Loader from "../../../../Components/Loader/index";
import Modal from "./Modal";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import PageviewRoundedIcon from "@mui/icons-material/PageviewRounded";

import "./Users.scss";

export default function index(): JSX.Element {
  const { users, loading, error } = useTypedSelector((state) => state.users);
  const { fetchUsers } = useActions();

  const style = {
    bgcolor: "background.paper",
    borderRadius: "10px",
    width: "100%",
  };
  const [isVisible, setIsVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(users[0]);

  useEffect(() => {
    fetchUsers();
  }, [isVisible]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  if (!users.length) {
    return <h1>Users not found</h1>;
  }

  return (
    <div className="users-container">
      <List sx={style} component="nav">
        {users.map((el, index) => (
          <>
            <ListItem button key={el.id}>
              <div
                className="item-card"
                onClick={() => {
                  setSelectedUser(el);
                  setIsVisible(true);
                }}
              >
                <div>№{index + 1}</div>
                <div className="item-text">{el.telephone_number}</div>
                <PageviewRoundedIcon color="success" fontSize="large" />
              </div>
            </ListItem>
            <Divider light />
          </>
        ))}
      </List>
      {isVisible ? <Modal user={selectedUser} fun={setIsVisible} /> : ""}
    </div>
  );
}
