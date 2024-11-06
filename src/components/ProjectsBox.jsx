import React from "react";
import Dove from "../assets/images/Dove.png";

const ProjectsBox = () => {
  return (
    <section className="section" id="Projects">
      <div className="top-header">
        <h1>Poppular</h1>
      </div>

      <div className="project-container">
        <div className="project-box">
        <div className="project-icon"> 
          <img src={Dove} alt="Dove" />
        </div>
          <h3>Dove</h3>
          <label>5 $ Dove Dove Dove<i className="uil uil-star"></i></label>
        </div>

        <div className="project-box">
        <div className="project-icon"> 
          <img src={Dove} alt="Dove" />
        </div>
          <h3>Dove</h3>
          <label>5 $ Dove Dove Dove<i className="uil uil-star"></i></label>
        </div>

        <div className="project-box">
        <div className="project-icon"> 
          <img src={Dove} alt="Dove" />
        </div>
          <h3>Dove</h3>
          <label>5 $ Dove Dove Dove<i className="uil uil-star"></i></label>
        </div>

        <div className="project-box">
        <div className="project-icon"> 
          <img src={Dove} alt="Dove" />
        </div>
          <h3>Dove</h3>
          <label>5 $ Dove Dove Dove<i className="uil uil-star"></i></label>
        </div>

      </div>
    </section>
  );
};

export default ProjectsBox;
