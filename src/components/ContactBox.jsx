import React from "react";
import Blossom from "../assets/images/Blossom.png";
import Bubbles from "../assets/images/Bubbles.png";

const ContactBox = () => {
  return (
    <section className="section" id="Contact">
      <div className="top-header">
        <h1>Customer Review</h1>
        <span>Follow instruction for more</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Blossom <i className="uil uil-corner-right-down"></i>
            </h2>
            <div className="project-icon"> 
            <img src={Blossom} alt="Blossom" />
          </div>
            <p>
              <i className="uil uil-envelope"></i>Lorem Ipsum is simply dummy text of the printing and typesetting
               industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </p>

          </div>
        </div>
        <div className="col">
          <div className="contact-info">
            <h2>
              Bubbles <i className="uil uil-corner-right-down"></i>
            </h2>
            <div className="project-icon"> 
            <img src={Bubbles} alt="Bubbles" />
          </div>
            <p>
              <i className="uil uil-envelope"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
