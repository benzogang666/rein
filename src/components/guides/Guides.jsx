import "./Guides.css";

import {
  IoBookOutline,
  IoPeopleOutline,
  IoMapOutline,
  IoCartOutline,
  IoChatbubbleEllipsesOutline,
  IoReaderOutline,
} from "react-icons/io5";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router";

const Guides = ({ onClose }) => {
  const guides = [
    { name: "Меню", icon: <IoBookOutline />, path: "/menu" },
    { name: "Вакансии", icon: <IoPeopleOutline />, path: "/vacancies" },
    { name: "Контакты", icon: <IoMapOutline />, path: "/contacts" },
    { name: "Корзина", icon: <IoCartOutline />, path: "/cart" },
    { name: "Отзывы", icon: <IoChatbubbleEllipsesOutline />, path: "/reviews" },
    { name: "Бланк", icon: <IoReaderOutline />, path: "/receipt" },
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
            {guides.map(({ name, icon, path }) => (
              <NavLink key={path} className="guide" to={path} onClick={onClose}>
                <div className="guide-icon">{icon}</div>
                <div>{name}</div>
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
