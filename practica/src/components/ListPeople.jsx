import React from "react";
import Profile from "./Profile";
import "./ListPeople.css";

const ListPeople = ({ children }) => {
  // console.log(children)
  return <div className="list-container">{children}</div>;
};

export default ListPeople;
