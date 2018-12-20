import React from "react";
import "./style.css";

function Footer(props) {
  return <h5 className="footer">{props.children}</h5>;
}

export default Footer;