import "./Menu-Layout.css";

import Header from "../../components/header/Header";
import { Outlet } from "react-router";
import Nomercy from "../../components/nomercy/Nomercy";

const Menu_Layout = () => {
  return (
    <>
      <div className="menu-layout">
        <Header />
        <div className="main">
          <Outlet />
        </div>
        <Nomercy />
      </div>
    </>
  );
};

export default Menu_Layout;