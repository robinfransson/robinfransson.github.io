import * as React from "react";
import { Header } from "./Header";
import { LeftMenu } from "./LeftMenu";
import { MainContainer } from "./MainContainer";
import "../style/Header.css";
export const Layout = (props: any): JSX.Element => {
  const [scrolledTop, setScrolledTop] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const bigMenu = window.scrollY <= 20;
    if (window.scrollY <= 40 && !scrolledTop) {
      setScrolledTop(bigMenu);
    } else if (window.scrollY >= 40 && scrolledTop) {
      setScrolledTop(bigMenu);
    }
  };

  return (
    <div className="Page">
      <Header bigMenu={scrolledTop} />
      <LeftMenu />
      <MainContainer marginTop={scrolledTop} />
    </div>
  );
};
