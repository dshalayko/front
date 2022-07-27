import React, { useEffect } from "react";
import { useActions } from "../../Store/hooks/useActions";
import Slider from "./components/Slider";
import { useTypedSelector } from "../../Store/hooks/useTypedSelector";
import Loader from "../../Components/Loader/index";

export default function ProductPage(): JSX.Element {
  const { goods, loading, error } = useTypedSelector((state) => state.goods);
  const { fetchGoods, setWhiteColor, setVisibleTrue, setVisibleFalse } =
    useActions();

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const windSize = getWindowDimensions();

  useEffect(() => {
    fetchGoods();
    setWhiteColor();
    windSize.width >= 780 ? setVisibleTrue() : setVisibleFalse();
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
      <Slider data={goods} />
    </>
  );
}
