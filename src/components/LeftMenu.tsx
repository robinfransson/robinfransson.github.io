import { useState } from "react";

import "../style/dist/Menu.css";
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
        <div className="LeftMenu-link">En "länk"</div>
      </div>
      <div className="LeftMenu-item">
        <div className="LeftMenu-link">En "länk"</div>
      </div>
      <div className="LeftMenu-item">
        <div className="LeftMenu-link">En "länk"</div>
      </div>
    </div>
  );
};
