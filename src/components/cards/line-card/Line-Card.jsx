import "./Line-Card.css";

import { IoClose, IoRemoveCircle, IoAddCircle } from "react-icons/io5";

import { useCart } from "../../../contexts/cartContext/CartContext";

const Line_Card = ({ round }) => {
  const { addToCart, decreaseQuantity, getProductQuantity, removeFromCart } =
    useCart();

  return (
    <>
      {round.map((line) => (
        <div className="line-card" key={line.id}>
          <img className="l-c-image" src={`/images/${line.image}`} alt="" />
          <div className="l-c-data">
            <IoClose
              className="l-c-remove"
              onClick={() => removeFromCart(line.id)}
            />
            <div className="l-c-named">{line.name}</div>
            <div className="l-c-price">{`${Intl.NumberFormat("ru-Ru").format(
              line.price
            )} ₸`}</div>
            <div className="l-c-expenses">
              <div className="l-c-counter">
                <IoRemoveCircle
                  className="l-c-counter-button"
                  onClick={() => decreaseQuantity(line.id)}
                />
                <div className="l-c-quantity">
                  {getProductQuantity(line.id)}
                </div>
                <IoAddCircle
                  className="l-c-counter-button"
                  onClick={() => addToCart(line)}
                />
              </div>
              <div className="l-c-all-price">
                {`${Intl.NumberFormat("ru-Ru").format(
                  line.price * getProductQuantity(line.id)
                )} ₸`}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Line_Card;