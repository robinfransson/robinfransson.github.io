import { useState } from "react";
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
      <div className="LeftMenu-item">b</div>
      <div className="LeftMenu-item">a</div>
      <div className="LeftMenu-item">h</div>
    </div>
  );
};
