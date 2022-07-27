import React, { useEffect } from "react";
import Loader from "../../Components/Loader";
import { useActions } from "../../Store/hooks/useActions";
import { useTypedSelector } from "../../Store/hooks/useTypedSelector";
import CategoryPage from "./components/CategoryPage";
// import {fetchCatalogs} from "../../Store/action-creators/catalogs";

export default function Catalog(): JSX.Element {
  const { catalogs, loading, error } = useTypedSelector((state) => state.catalogs);
  const { fetchCatalogs } = useActions();

  useEffect(() => {
    fetchCatalogs();
    const isVerified = JSON.parse(
      sessionStorage.getItem("isVerified") || "false"
    );
    if (!isVerified) {
      alert(
        "After verification, the order menu will be available to you. Please wait for data verification"
      );
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  if (!catalogs.length) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <CategoryPage data={catalogs} />
    </>
  );
}
