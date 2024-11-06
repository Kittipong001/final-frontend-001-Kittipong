import React from "react";
import Dove from "../assets/images/Dove.png";
import lux from "../assets/images/lux.png";
import Shokubutsu from "../assets/images/Shokubutsu.png";
import benice from "../assets/images/benice.png";


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
          <img src={lux} alt="lux" />
        </div>
          <h3>Lux</h3>
          <label>10 $ Lux Lux Lux<i className="uil uil-star"></i></label>
        </div>

        <div className="project-box">
        <div className="project-icon"> 
          <img src={Shokubutsu} alt="Shokubutsu" />
        </div>
          <h3>Shokubutsu</h3>
          <label>15 $ Shokubutsu Shokubutsu <i className="uil uil-star"></i></label>
        </div>

        <div className="project-box">
        <div className="project-icon"> 
          <img src={benice} alt="benice" />
        </div>
          <h3>Benicee</h3>
          <label>20 $  benice benice<i className="uil uil-star"></i></label>
        </div>

      </div>
    </section>
  );
};

export default ProjectsBox;
