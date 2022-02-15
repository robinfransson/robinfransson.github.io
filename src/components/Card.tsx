import * as React from "react";
import { Component } from "react";
import { CardData } from "./Interfaces";

export const Card = (info: CardData) => {
  return (
    <div className="Card">
      <div className="Card-header">{info.header}</div>
      <div className="Card-body">{info.body}</div>
      <div className="Card-footer">{info.footer}</div>
    </div>
  );
};
