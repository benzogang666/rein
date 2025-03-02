import "./Navigate.css";

import { IoArrowBack } from "react-icons/io5";

import { useNavigate } from "react-router";

const Navigate = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navigate">
        <IoArrowBack
          className="navigate-navigate"
          onClick={() => navigate(-1)}
        />
      </div>
    </>
  );
};

export default Navigate;