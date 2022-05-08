import React from "react";
import { useOutlet, useOutletContext, useParams } from "react-router-dom";

interface PriceProps {
  id: string;
}

const Price = () => {
  const { id } = useOutletContext<PriceProps>();
  console.log(id);
  return <h1>Price</h1>;
};

export default Price;
