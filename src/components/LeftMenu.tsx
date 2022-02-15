import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Menu.css";
export const LeftMenu = () => {
  const [active, setActive] = useState(false);

  const toggleActive = (e: React.MouseEvent) => {
    setActive((old) => !old);
  };

  return (
    <div className={["LeftMenu", active ? "active" : "inactive"].join(" ")}>
      <div className="LeftMenu-toggler-container" onClick={toggleActive}>
        <span className="LeftMenu-toggler"></span>
      </div>
      <div className="LeftMenu-item">
        <Link to="/" onClick={toggleActive}>
          Home
        </Link>
      </div>
      <div className="LeftMenu-item">
        <Link to="/cards" onClick={toggleActive}>
          Cards
        </Link>
      </div>
    </div>
  );
};
