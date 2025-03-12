import "./Layouts.css";

import { Outlet } from "react-router";

const Layouts = () => {
  return (
    <>
      <div className="layouts">
        <Outlet />
      </div>
    </>
  );
};

export default Layouts;