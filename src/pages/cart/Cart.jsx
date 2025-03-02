import "./Cart.css";

import { IoReader, IoTrash } from "react-icons/io5";

import { useNavigate } from "react-router";

import { useCart } from "../../contexts/cartContext/CartContext";

import LC from "../../components/cards/line-card/Line-Card";

const Cart = () => {
  const { cart, getTotalPrice, clearCart } = useCart();

  const navigate = useNavigate();
  return (
    <>
      <div className="cart">
        <div className="cart-dashboard">
          <IoReader
            className="cart-device"
            onClick={() => navigate("/receipt")}
          />
          <div className="cart-total-price">
            {Intl.NumberFormat("ru-Ru").format(getTotalPrice()) + " ₸"}
          </div>
          <IoTrash className="cart-device" onClick={() => clearCart()} />
        </div>
        <div className="cart-storage">
          <LC round={cart} />
        </div>
      </div>
    </>
  );
};

export default Cart;
