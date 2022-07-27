import React, { useEffect } from "react";
import "./Style.scss";

import Loader from "../../../../Components/Loader/index";
import { useTypedSelector } from "../../../../Store/hooks/useTypedSelector";
import { useActions } from "../../../../Store/hooks/useActions";
import {deleteOrder, updateOrder} from "../../../../API/ordersAPI";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
// import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
// import SendIcon from "@mui/icons-material/Send";

import { IOrders } from "../../../../globalTypes";

export default function index(): JSX.Element {
  const { orders, loading, error } = useTypedSelector((state) => state.orders);
  const { fetchOrders } = useActions();

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const deleteOrderByID = async (id: number) => {
    const res = await deleteOrder(id);
    console.log(res);
    alert(res);
    fetchOrders();
  };
  const changeOrder = async (id: number, status: string) => {
    console.log(id, status);
    const res = await updateOrder(id, status);
    alert(res);
    fetchOrders();
  };
  // const sendMessage = (id: number) => {
  //   console.log(id);
  //   alert("Function under development");
  // };

  function AccardionElement(props: { el: IOrders; index: number }) {
    const { el, index } = props;
    const className1 = `panel${index}`;
    const className2 = `panel${index}d-content`;
    const className3 = `panel${index}d-header`;
    return (
      <Accordion
        expanded={expanded === className1}
        onChange={handleChange(className1)}
        key={el.id}
      >
        <AccordionSummary
          aria-controls={className2}
          id={className3}
          expandIcon={<ExpandMoreIcon />}
        >
          <div className="accordion-title">
            <div>№{el.id}</div>
            <div>Date: {el.createdAt.split("T").shift()}</div>
            <div>User: {el.user_ID}</div>
            <div>Status:
              {el.order_status == null ? "Pending" : el.order_status ? "Activ" : "Complete"}
              </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {el.product_list.map((prod, index) => (
            <div className="accordion-details" key={index}>
              <h3>Name: {prod.product_name}</h3>
              {/* <div> {prod.product_id}</div> */}
              <div>Quantity: {prod.quantity}</div>
              <div>Price: ${prod.total_price}</div>
            </div>
          ))}
          <div>
            Total price:
            <strong>
              {" "}
              $
              {el.product_list.reduce(
                (sum, current) => sum + current.total_price,
                0
              )}
            </strong>
          </div>

          <div className="accordion-btn-block">
            {/*{ <IconButton*/}
            {/*  aria-label="message"*/}
            {/*  size="large"*/}
            {/*  color="info"*/}
            {/*  disabled={true}*/}
            {/*  onClick={() => {*/}
            {/*    sendMessage(el.id);*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <SendIcon fontSize="inherit" />*/}
            {/*</IconButton> }*/}
            CHANGE STATUS:
            {<IconButton
                aria-label="service"
                size="small"
                color="primary"
                // disabled={true}
                onClick={() => {
                  changeOrder(el.id, 'true');
                }}
            >Activ
            </IconButton> }
            {<IconButton
                aria-label="service"
                size="small"
                color="primary"
                // disabled={true}
                onClick={() => {
                  changeOrder(el.id, 'null');
                }}
            >Pending
            </IconButton> }
            {<IconButton
              aria-label="service"
              size="small"
              color="primary"
              // disabled={true}
              onClick={() => {
                changeOrder(el.id, 'false');
              }}
            >Complete
            </IconButton> }
            <IconButton
              aria-label="delete"
              size="large"
              color="error"
              onClick={() => {
                deleteOrderByID(el.id);
              }}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>
        </AccordionDetails>
      </Accordion>
    );
  }

  useEffect(() => {
    fetchOrders();
  }, []);
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  if (!orders.length) {
    return <h1>Items not found</h1>;
  }

  return (
    <div className="orders-container">
      {orders.map((el, index) => (
        <AccardionElement el={el} index={index} key={el.id} />
      ))}
    </div>
  );
}
