import React from "react";
import Navbar from "./Navbar";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <div className="container">
      <Navbar />
      {props.children}
      <footer className="footer"></footer>
    </div>
  );
};

export default Layout;
