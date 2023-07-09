import React, { useContext } from "react";
import { DataContext, getServerData } from "../store/Context";
import { oneProducts } from "../repositories";
export default function Second() {
  getServerData("product", oneProducts);
  const apiData = useContext(DataContext);
  return (
    <>
      <h2>{apiData?.product?.data?.title}</h2>
      <p>{apiData?.product?.data?.description}</p>
    </>
  );
}
