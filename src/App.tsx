import React from "react";
import logo from "./logo.svg";

import { PageWrapper } from "./components/PageWrapper";
import { Header } from "./components/Header";
import { LeftMenu } from "./components/LeftMenu";
import { MainContainer } from "./components/MainContainer";

function App() {
  return (
    <PageWrapper test={"test"} leftMenu={<LeftMenu />}>
      <Header />
      <MainContainer />
    </PageWrapper>
  );
}

export default App;
