import React, { useEffect } from "react";
import "./Style.scss";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
// import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";

import Loader from "../../../../Components/Loader/index";
import { useTypedSelector } from "../../../../Store/hooks/useTypedSelector";
import { useActions } from "../../../../Store/hooks/useActions";
import { deleteProduct } from "../../../../API/goodsAPI";

export default function index(): JSX.Element {
  const { goods, loading, error } = useTypedSelector((state) => state.goods);
  const { fetchGoods } = useActions();

  const deleteBtn = async (id: number) => {
    const res = await deleteProduct(id);
    alert(JSON.stringify(res));
    fetchGoods();
  };
  // const changeBtn = async (id: number) => {
  //   console.log(id);
  //   alert("In process");
  // };

  useEffect(() => {
    fetchGoods();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  if (!goods.length) {
    return <h1>Items not found</h1>;
  }

  return (
    <div className="all-goods-container">
      <div className="product-card-container">
        {goods.map((el) => (
          <div className="admin-product-card" key={el.id}>
            {el.type === "img" ? (
              <img src={el.src} className="goods-img" alt="" />
            ) : (
              <img src={el.thumbnail} className="goods-img" alt="" />
            )}
            <div className="card-content">
              <div className="card-info">
                <div className="card-title">{el.name}</div>
                <div className="card-price">${el.price[0].amount}</div>
              </div>
            </div>

            <div className="btn-block">
              {/* <IconButton
                aria-label="delete"
                size="large"
                color="primary"
                disabled={true}
                onClick={() => {
                  changeBtn(el.id);
                }}
              >
                <DesignServicesOutlinedIcon fontSize="inherit" />
              </IconButton> */}
              <IconButton
                aria-label="delete"
                size="large"
                color="error"
                onClick={() => {
                  deleteBtn(el.id);
                }}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
