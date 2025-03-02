import "./Main-Layout.css";

import Header from "../../components/header/Header";
import Navigate from "../../components/navigate/Navigate";
import { Outlet } from "react-router";
import Nomercy from "../../components/nomercy/Nomercy";

const Main_Layout = () => {
  return (
    <>
      <div className="main-layout">
        <div className="main-layout-header">
          <Header />
          <Navigate />
        </div>
        <div className="main">
          <Outlet />
        </div>
        <Nomercy />
      </div>
    </>
  );
};

export default Main_Layout;