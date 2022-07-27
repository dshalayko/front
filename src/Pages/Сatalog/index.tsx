import React, { useEffect } from "react";
import Loader from "../../Components/Loader";
import { useActions } from "../../Store/hooks/useActions";
import { useTypedSelector } from "../../Store/hooks/useTypedSelector";
import CatalogPage from "./components/CatalogPage";
// import {fetchCatalog} from "../../Store/action-creators/goods";

export default function Catalog(id:unknown): JSX.Element {
  const { goods, loading, error } = useTypedSelector((state) => state.goods);
  const { fetchCatalog } = useActions();

  useEffect(() => {
    fetchCatalog(id);
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
  if (!goods.length) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <CatalogPage data={goods} />
    </>
  );
}
