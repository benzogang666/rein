import "./Product.css";

import { IoRemoveCircleOutline, IoAddCircleOutline } from "react-icons/io5";

import { useParams } from "react-router";

import { useCart } from "../../contexts/cartContext/CartContext";
import { useProducts } from "../../contexts/productsContext/productsContext";

const Product = () => {
  const { product } = useParams();

  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();

  const line = useProducts()
    .categories.flatMap((c) => c.subcategories.flatMap((s) => s.items))
    .find((i) => i.id === product);

  return (
    <>
      <div className="product">
        <div className="p-t-image"></div>
        <div className="p-t-data">
          <div className="p-t-named">{line.name}</div>
          <div className="p-t-cooking-time">{line.cookingTime} минут</div>
          <div className="p-t-details">{line.details}</div>
          <div className="p-t-counter">
            <IoRemoveCircleOutline onClick={() => decreaseQuantity(line.id)} />
            <div>{getProductQuantity(line.id)}</div>
            <IoAddCircleOutline onClick={() => addToCart(line)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;