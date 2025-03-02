import "./Receipt.css";
import { useCart } from "../../contexts/cartContext/CartContext";
import React from "react";

const Receipt = () => {
  const { cart, getTotalPrice } = useCart();

  const totalPrice = getTotalPrice();
  const serviceFee = Math.round(totalPrice * 0.05);
  const totalToPay = totalPrice + serviceFee;

  return (
    <div className="receipt">
      <div className="receipt-label">
        <div>
          Общая сумма:⠀{Intl.NumberFormat("ru-RU").format(totalPrice)} ₸
        </div>
        <div>Сервис 5%:⠀{Intl.NumberFormat("ru-RU").format(serviceFee)} ₸</div>
        <div>К оплате:⠀{Intl.NumberFormat("ru-RU").format(totalToPay)} ₸</div>
      </div>

      <div className="receipt-storage">
        {cart.map((line, index) => (
          <React.Fragment key={line.id || index}>
            <div className="receipt-card">
              <div className="receipt-data">
                <div className="receipt-named">{line.name}</div>
                <div className="receipt-quantity">кол: {line.quantity}</div>
              </div>
              <div className="receipt-expenses">
                <div>{Intl.NumberFormat("ru-RU").format(line.price)} ₸</div>
                <div>
                  {Intl.NumberFormat("ru-RU").format(
                    line.quantity * line.price
                  )}{" "}
                  ₸
                </div>
              </div>
            </div>
            {index < cart.length - 1 && <div className="receipt-stripe" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Receipt;
