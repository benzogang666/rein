import "./Product.css";

import { useParams } from "react-router";

import { useProducts } from "../../contexts/productsContext/productsContext";

import Navigate from "../../components/navigate/Navigate";
import SC from "../../components/cards/solo-card/Solo-Card";
import Nomercy from "../../components/nomercy/Nomercy";

const Product = () => {
  const { product } = useParams();
  const line = useProducts()
    .categories.flatMap((c) => c.subcategories.flatMap((s) => s.items))
    .find((i) => i.id === product);
    
  return (
    <>
      <div className="product">
        <Navigate />
        <SC round={line} />
        <Nomercy />
      </div>
    </>
  );
};

export default Product;