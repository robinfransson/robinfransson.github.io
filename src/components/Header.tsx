import React from "react";
import "../style/dist/Header.css";

interface HeaderProps {
  bigMenu: boolean;
}

export const Header = (props: HeaderProps) => {
  return (
    <div className={["Header", props.bigMenu ? "active" : ""].join(" ")}>
      <div className="Header-main">test</div>
      <div className="Header-item">Hej</div>
    </div>
  );
};
