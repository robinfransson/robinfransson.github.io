import * as React from "react";
import { Component } from "react";
import { Outlet } from "react-router-dom";
import style from "../style/Shared.module.scss";
interface Props {
  marginTop: boolean;
}
export const MainContainer = (props: Props) => {
  return (
    <div
      className={["Page-content", props.marginTop ? " margin" : ""].join(" ")}
    >
      <Outlet />
    </div>
  );
};
