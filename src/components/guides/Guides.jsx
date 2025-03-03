import "./Guides.css";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router";

const Guides = ({ onClose }) => {
  const guides = [
    { name: "Меню", path: "/menu" },
    { name: "Вакансии", path: "/vacancies" },
    { name: "Контакты", path: "/contacts" },
    { name: "Корзина", path: "/cart" },
    { name: "Отзывы", path: "/reviews" },
    { name: "Бланк", path: "/receipt" },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Отключаем прокрутку

    return () => {
      document.body.style.overflow = ""; // Восстанавливаем прокрутку при размонтировании
    };
  }, []);

  return createPortal(
    <>
      <div className="guides-overlay" onClick={onClose}>
        <div className="guides-content" onClick={(e) => e.stopPropagation()}>
          <div className="guides-label">Redux</div>
          <div className="guides-storage">
            {guides.map(({ name, path }) => (
              <NavLink key={path} className="guide" to={path} onClick={onClose}>
                {name}
              </NavLink>
            ))}
          </div>
          <div className="guide" onClick={onClose}>
            Закрыть
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Guides;