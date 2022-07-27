import React from "react";
import "./Style.scss";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import NewProduct from "./components/NewProduct";
import NewCatalog from "./components/NewCatalog";
import Orders from "./components/Orders";
import AllGoods from "./components/AllGoods";
import Managers from "./components/Managers";
import Users from "./components/Users";
interface TabPanelProps {
  children?: JSX.Element;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box mt={1} className="workplace">
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AdminPage(): JSX.Element {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="adminPage-contaner">
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="scrollable auto tabs example"
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            <Tab label="Users" {...a11yProps(0)} />
            <Tab label="Add new product" {...a11yProps(1)} />
            <Tab label="All goods" {...a11yProps(2)} />
            <Tab label="Orders" {...a11yProps(3)} />
            <Tab label="Managers" {...a11yProps(4)} />
            <Tab label="Add new category" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Users />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <NewProduct />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AllGoods />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Orders />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Managers />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <NewCatalog />
        </TabPanel>
      </Box>
    </div>
  );
}
