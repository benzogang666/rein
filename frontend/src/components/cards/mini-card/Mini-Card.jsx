import "./Mini-Card.css";

import { useNavigate } from "react-router";

import { useCart } from "../../../contexts/cartContext/CartContext";

import { IoRemoveCircle, IoAddCircle } from "react-icons/io5";

const Mini_Card = ({ round }) => {
  const navigate = useNavigate();
  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();
  return (
    <>
      <div className="mini-cards">
        {round.map((line) => (
          <div className="mini-card" key={line.id}>
            <div className="m-c-data" onClick={() => navigate(line.id)}>
              <div className="m-c-named">{line.name}</div>
              <div className="m-c-price">
                {`${Intl.NumberFormat("ru-Ru").format(line.price)} ₸`}
              </div>
            </div>
            <div className="m-c-counter">
              {getProductQuantity(line.id) > 0 && (
                <>
                  <IoRemoveCircle
                    className="m-c-counter-button"
                    onClick={() => decreaseQuantity(line.id)}
                  />
                  {getProductQuantity(line.id)}
                </>
              )}
              <IoAddCircle
                className="m-c-counter-button"
                onClick={() => addToCart(line)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mini_Card;