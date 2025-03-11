import "./Product.css";

import { useParams } from "react-router";

import { useProducts } from "../../contexts/productsContext/productsContext";

import Navigate from "../../components/navigate/Navigate";
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
        <div className="product-storage">
          <div className="p-s-image"></div>
          <div className="p-s-data">
            <div className="p-s-named">{line.name}</div>
            <div className="p-s-details">{line.details}</div>
          </div>
          <div className="p-s-counter">
            <div>-</div>
            <div>6</div>
            <div>+</div>
          </div>
        </div>
        <Nomercy />
      </div>
    </>
  );
};

export default Product;