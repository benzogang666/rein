import "./Row-Card.css";

import { useNavigate } from "react-router";

import { IoRemoveCircle, IoAddCircle } from "react-icons/io5";

import { useCart } from "../../../contexts/cartContext/CartContext";

const Row_Card = ({ round }) => {
  const navigate = useNavigate();
  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();
  return (
    <>
      {round.map((line) => (
        <div className="row-card" key={line.id}>
          <img
            className="r-c-image"
            src={`/images/${line.image}`}
            onClick={() => navigate(line.id)}
            alt=""
          />
          <div className="r-c-data">
            <div className="r-c-named">{line.name}</div>
            <div className="r-c-details">{line.details}</div>
            <div className="r-c-expenses">
              <div className="r-c-price">
                {`${Intl.NumberFormat("ru-Ru").format(line.price)} ₸`}
              </div>
              <div className="r-c-counter">
                {getProductQuantity(line.id) > 0 && (
                  <>
                    <IoRemoveCircle
                      className="r-c-counter-button"
                      onClick={() => decreaseQuantity(line.id)}
                    />
                    {getProductQuantity(line.id)}
                  </>
                )}
                <IoAddCircle
                  className="r-c-counter-button"
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

export default Row_Card;
