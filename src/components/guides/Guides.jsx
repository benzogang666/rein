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
    {
      name: "Меню",
      icon: <IoBookOutline className="guide-icon" />,
      path: "/menu",
    },
    {
      name: "Вакансии",
      icon: <IoPeopleOutline className="guide-icon" />,
      path: "/vacancies",
    },
    {
      name: "Контакты",
      icon: <IoMapOutline className="guide-icon" />,
      path: "/contacts",
    },
    {
      name: "Корзина",
      icon: <IoCartOutline className="guide-icon" />,
      path: "/cart",
    },
    {
      name: "Отзывы",
      icon: <IoChatbubbleEllipsesOutline className="guide-icon" />,
      path: "/reviews",
    },
    {
      name: "Бланк",
      icon: <IoReaderOutline className="guide-icon" />,
      path: "/receipt",
    },
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
                {icon} <div>{name}</div>
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
