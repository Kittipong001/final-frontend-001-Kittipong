import React from "react";
import Dove from "../assets/images/Dove.png";
import dettol from "../assets/images/dettol.png";

const AboutBox = () => {
  return (
    <section className="section" id="About">
      <div className="top-header">
        <h1>About Us </h1>
      </div>
      <div className="top-header">
        <h1>Know More </h1>
      </div>
      
      <div className="row">
        {/** About me */}
        
        <div className="col">
          <div className="about-info">
          <div className="featured-image">
        <div className="image">
          <img src={Dove} alt="Dove" />
        </div>
      </div>
            <h3>What is Lorem Ipsum?</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="about-btn">
            </div>
          </div>
        </div>

        <div className="col">
          <div className="about-info">
          <div className="featured-image">
        <div className="image">
          <img src={dettol} alt="dettol" />
        </div>
      </div>
            <h3>What is Lorem Ipsum?</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="about-btn">
            </div>
          </div>
        </div>
        {/** Skills */}
 
      </div>
    </section>
  );
};

export default AboutBox;
