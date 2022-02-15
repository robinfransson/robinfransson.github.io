import * as React from "react";
import "../style/Home.css";
import { Get } from "../components/GetRequest";
import { HomePageData } from "../components/Interfaces";

export const Home = (test: any, data: HomePageData) => {
  return (
    <>
      <div className="Home-header">{data.header}</div>
      <div className="Home-preamble">{data.preamble}</div>
    </>
  );
};
