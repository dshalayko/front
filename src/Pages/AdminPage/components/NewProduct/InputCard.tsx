import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

type props = {
  setPrice: React.Dispatch<
    React.SetStateAction<
      {
        quantity: number;
        amount: number;
      }[]
    >
  >;
};

export default function InpytCard(props: props): JSX.Element {
  const [price1, setPrice1] = useState({ quantity: 1, amount: 0 });
  const [price2, setPrice2] = useState({ quantity: 50, amount: 0 });
  const [price3, setPrice3] = useState({ quantity: 150, amount: 0 });
  const [price4, setPrice4] = useState({ quantity: 250, amount: 0 });
  const prices = [price1, price2, price3, price4];

  const inputStyle = { maxWidth: "45%" };
  const stackStyle = { maxWidth: "80%" };

  useEffect(() => {
    props.setPrice(prices);
  }, [price1, price2, price3, price4]);

  return (
    <div>
      <Stack justifyContent="space-between" alignItems="center" spacing={1}>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={stackStyle}
        >
          <TextField
            id="outlined-number"
            label="Quantity"
            type="number"
            variant="filled"
            size="small"
            defaultValue={price1.quantity}
            InputLabelProps={{
              shrink: true,
            }}
            sx={inputStyle}
            onChange={(e) =>
              setPrice1((state) => {
                state.amount, (state.quantity = +e.target.value);
                return state;
              })
            }
          />
          <TextField
            id="outlined-number"
            label="Amount"
            type="number"
            variant="filled"
            size="small"
            defaultValue={price1.amount}
            InputLabelProps={{
              shrink: true,
            }}
            sx={inputStyle}
            onChange={(e) =>
              setPrice1((state) => {
                state.quantity, (state.amount = +e.target.value);
                return state;
              })
            }
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={stackStyle}
        >
          <TextField
            id="outlined-number"
            label="Quantity"
            type="number"
            variant="filled"
            size="small"
            defaultValue={price2.quantity}
            InputLabelProps={{
              shrink: true,
            }}
            sx={inputStyle}
            onChange={(e) =>
              setPrice2((state) => {
                state.amount, (state.quantity = +e.target.value);
                return state;
              })
            }
          />
          <TextField
            id="outlined-number"
            label="Amount"
            type="number"
            variant="filled"
            size="small"
            defaultValue={price2.amount}
            InputLabelProps={{
              shrink: true,
            }}
            sx={inputStyle}
            onChange={(e) =>
              setPrice2((state) => {
                state.quantity, (state.amount = +e.target.value);
                return state;
              })
            }
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={stackStyle}
        >
          <TextField
            id="outlined-number"
            label="Quantity"
            type="number"
            variant="filled"
            size="small"
            defaultValue={price3.quantity}
            InputLabelProps={{
              shrink: true,
            }}
            sx={inputStyle}
            onChange={(e) =>
              setPrice3((state) => {
                state.amount, (state.quantity = +e.target.value);
                return state;
              })
            }
          />
          <TextField
            id="outlined-number"
            label="Amount"
            type="number"
            variant="filled"
            size="small"
            defaultValue={price3.amount}
            InputLabelProps={{
              shrink: true,
            }}
            sx={inputStyle}
            onChange={(e) =>
              setPrice3((state) => {
                state.quantity, (state.amount = +e.target.value);
                return state;
              })
            }
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={stackStyle}
        >
          <TextField
            id="outlined-number"
            label="Quantity"
            type="number"
            variant="filled"
            size="small"
            defaultValue={price4.quantity}
            InputLabelProps={{
              shrink: true,
            }}
            sx={inputStyle}
            onChange={(e) =>
              setPrice4((state) => {
                state.amount, (state.quantity = +e.target.value);
                return state;
              })
            }
          />
          <TextField
            id="outlined-number"
            label="Amount"
            type="number"
            variant="filled"
            size="small"
            defaultValue={price4.amount}
            InputLabelProps={{
              shrink: true,
            }}
            sx={inputStyle}
            onChange={(e) =>
              setPrice4((state) => {
                state.quantity, (state.amount = +e.target.value);
                return state;
              })
            }
          />
        </Stack>
      </Stack>
    </div>
  );
}
