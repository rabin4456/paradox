import "./Footer.css";
import React from "react";
import img from "../images/nature.jpg";

const Footer = () => {
  return (
    <div className="footer_container">
      <img src={img} alt="" />

      <div className="login_container">
        <h1 className="login_container_text">Every inspiration from nature</h1>
        <p className="login_container_text2">
          Get started using 0ur services with a 30 day free trial
        </p>
      <button className='btn'>Try Out</button>
      </div>
    </div>
  );
};

export default Footer;
