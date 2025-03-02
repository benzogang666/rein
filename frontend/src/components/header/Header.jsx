import "./Header.css";

import { useNavigate } from "react-router";

import { IoMenu, IoSearch } from "react-icons/io5";

import Guides from "../../components/guides/Guides";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="header">
        <IoMenu className="header-navigate" onClick={() => setIsOpen(true)} />
        {isOpen && <Guides onClose={() => setIsOpen(false)} />}
        <div className="header-logo">Redux</div>
        <IoSearch
          className="header-navigate"
          onClick={() => navigate("/search")}
        />
      </div>
    </>
  );
};

export default Header;