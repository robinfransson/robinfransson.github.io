import * as React from "react";
import "../style/dist/Page.css";
interface Props {
  children?: React.ReactNode[];
  test: string;
  leftMenu: React.ReactNode;
}
export const PageWrapper = ({
  test,
  children,
  leftMenu,
}: Props): JSX.Element => {
  console.log(leftMenu);
  return (
    <div className="Main">
      {leftMenu}
      {children}
    </div>
  );
};
