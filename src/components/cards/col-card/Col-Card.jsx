import "./Col-Card.css";

import { useNavigate } from "react-router";

import { IoRemoveCircle, IoAddCircle } from "react-icons/io5";

import { useCart } from "../../../contexts/cartContext/CartContext";

const Col_Card = ({ round }) => {
  const navigate = useNavigate();
  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();
  return (
    <>
      {round.map((line) => (
        <div className="col-card" key={line.id}>
          <img
            className="c-c-image"
            src={`/images/${line.image}`}
            onClick={() => navigate(line.id)}
          />
          <div className="c-c-data">
            <div className="c-c-named">{line.name}</div>
            <div className="c-c-details">{line.details}</div>
            <div className="c-c-expenses">
              <div className="c-c-price">
                {`${Intl.NumberFormat("ru-Ru").format(line.price)} ₸`}
              </div>
              <div className="c-c-counter">
                {getProductQuantity(line.id) > 0 && (
                  <>
                    <IoRemoveCircle
                      className="c-c-counter-button"
                      onClick={() => decreaseQuantity(line.id)}
                    />
                    {getProductQuantity(line.id)}
                  </>
                )}
                <IoAddCircle
                  className="c-c-counter-button"
                  onClick={() => addToCart(line)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Col_Card;