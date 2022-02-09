import React from "react";
import logo from "./logo.svg";

import style from "./style/Shared.module.scss";
import { Header } from "./components/Header";
import { LeftMenu } from "./components/LeftMenu";

function App() {
  return (
    <div className={style.root}>
      <Header />

      <LeftMenu />
    </div>
  );
}

export default App;
