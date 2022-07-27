import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useTypedSelector } from "../../Store/hooks/useTypedSelector";
import logo from "../../assets/logo.svg";
import { ICartItem, IToken } from "../../globalTypes";
import { useActions } from "../../Store/hooks/useActions";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import IconButton from "@mui/material/IconButton";

export default function Navbar(): JSX.Element {
  const { cartCollor } = useTypedSelector((state) => state.navbar);
  const { isAdmin } = useTypedSelector((state) => state.auth);
  const cartProducts =
    (JSON.parse(
      localStorage.getItem("cartProducts") as string
    ) as ICartItem[]) || null;
    
  const { setIsAdminTrue, setIsAuthFalse, setCleanLocalStorageCart } = useActions();
  const cheakAdminRole = () => {
    const token = (sessionStorage.getItem("token") as string) || null;
    if (token) {
      const decodeToken = jwt_decode(token) as IToken;
      if (decodeToken.role == "ADMIN") {
        return true;
      }
    }
    return false;
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    setIsAuthFalse();
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    cheakAdminRole() ? setIsAdminTrue() : null;
    setCleanLocalStorageCart();
  }, []);

  return (
    <>
      <div className="navbar">
        <Button aria-describedby={id} onClick={handleClick}>
          <img src={logo} alt="logo" />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
        >
          <div className="navbar-popover" onClick={handleClose}>
            <Link to="/catalog" className="navbar-popover-link">
              Catalog
            </Link>
            <Link to="/category" className="navbar-popover-link">
              Category
            </Link>
            <Link to="/cart" className="navbar-popover-link">
              Cart
            </Link>
            {isAdmin ? (
              <Link className="navbar-popover-link" to="/admin">
                Admin Page
              </Link>
            ) : (
              ""
            )}

            <IconButton aria-label="delete" onClick={() => logOut()}>
              <LogoutRoundedIcon />
              Log Out
            </IconButton>
          </div>
        </Popover>

        <div className="addToCart">
          <Link to="/cart">
            <svg
              width="40"
              height="40"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 14V2H0V0H3C3.26522 0 3.51957 0.105357 3.70711 0.292893C3.89464 0.48043 4 0.734784 4 1V13H16.438L18.438 5H6V3H19.72C19.872 3 20.022 3.03466 20.1586 3.10134C20.2952 3.16801 20.4148 3.26495 20.5083 3.38479C20.6019 3.50462 20.6668 3.6442 20.6983 3.79291C20.7298 3.94162 20.7269 4.09555 20.69 4.243L18.19 14.243C18.1358 14.4592 18.011 14.6512 17.8352 14.7883C17.6595 14.9255 17.4429 15 17.22 15H3C2.73478 15 2.48043 14.8946 2.29289 14.7071C2.10536 14.5196 2 14.2652 2 14ZM4 21C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19C2 18.4696 2.21071 17.9609 2.58579 17.5858C2.96086 17.2107 3.46957 17 4 17C4.53043 17 5.03914 17.2107 5.41421 17.5858C5.78929 17.9609 6 18.4696 6 19C6 19.5304 5.78929 20.0391 5.41421 20.4142C5.03914 20.7893 4.53043 21 4 21ZM16 21C15.4696 21 14.9609 20.7893 14.5858 20.4142C14.2107 20.0391 14 19.5304 14 19C14 18.4696 14.2107 17.9609 14.5858 17.5858C14.9609 17.2107 15.4696 17 16 17C16.5304 17 17.0391 17.2107 17.4142 17.5858C17.7893 17.9609 18 18.4696 18 19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21Z"
                fill={cartCollor}
              />
            </svg>
          </Link>
          {cartProducts && cartProducts.length > 0 ? (
            <div className="cart-size">{cartProducts.length}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
