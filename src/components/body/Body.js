import "./Body.css";
import React from "react";
import img from "../images/original.jpg";
import img1 from "../images/work culture.png";
import img2 from "../images/1542298796.jpg";
import img3 from "../images/earth.png";

const Body = () => {
  return (
    <div className="body_container">
      <div className="body_container_image">
        <img src={img} alt="" />
        <h1>Building the future</h1>
      </div>

      <div className="body_container_image_flexbox">
        <div className="body_container_image_flexbox1">
          <img src={img1} alt="" />
          <div className="body_container_text">
            <h1 className='container_text'>
              Features <br /> <span style={{ color: "orange" }}>Ought</span> to{" "}
              <br /> Partake
            </h1>
          </div>
        </div>

        <div className="body_container_image_flexbox2">
          <img src={img2} className="body_container_image1" alt="" />

          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body;
