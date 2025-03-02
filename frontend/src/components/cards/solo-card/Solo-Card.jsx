import "./Solo-Card.css";

import { IoRemove, IoAdd } from "react-icons/io5";

import { useCart } from "../../../contexts/cartContext/CartContext";

const Solo_Card = ({ round }) => {
  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();
  return (
    <>
      <div className="solo-card">
        <div className="s-c-image"></div>
        <div className="s-c-data">
          <div className="s-c-named">{round.name}</div>
          <div className="s-c-details">{round.details}</div>
        </div>
        <div className="s-c-expenses">
          <div className="s-c-price">
            {`${Intl.NumberFormat("ru-RU").format(round.price)} ₸`}
          </div>
          <div className="s-c-counter">
            <IoRemove
              className="s-c-counter-button"
              onClick={() => decreaseQuantity(round.id)}
            />
            {getProductQuantity(round.id)}
            <IoAdd
              className="s-c-counter-button"
              onClick={() => addToCart(round)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Solo_Card;