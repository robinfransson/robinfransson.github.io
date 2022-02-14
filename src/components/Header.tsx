import React from "react";
import "../style/Header.css";

interface HeaderProps {
  bigMenu: boolean;
}

export const Header = (props: HeaderProps) => {
  return (
    <div className={["Header", props.bigMenu ? "active" : ""].join(" ")}>
      <div className="Header-main">Github pages</div>
    </div>
  );
};
