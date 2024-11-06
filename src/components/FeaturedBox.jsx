import React from "react";
import Dove from "../assets/images/Dove.png";


const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>AuraPure</span>
        </div>
        <div className="featured-name">
          l <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Shop Now<i className="uil-shopping-basket"></i>
          </button>
          <button className="btn">
            Know More <i className="uil-shopping-basket"></i>
          </button>
        </div>

        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/q.vasperx/">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/profile.php?id=100057105284923">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/Eyejangg">
              <i className="uil uil-github"></i>
            </a>
          </div>
          
        <section class="card-section">
      <div class="card">
        <div class="card-icon">
        <i class="uil uil-fast-mail">

        </i>
        </div>
        <h3 class="card-title">What is Lorem Ipsum?</h3>
        <p class="card-description">Lorem ipsum dolor sit amet consectetur adipiscing elit. Velit, facere debitis omnis.</p>
      </div>

      <div class="card">
        <div class="card-icon">
        <i class="uil uil-file-contract"></i>
        </div>
        <h3 class="card-title">What is Lorem Ipsum?</h3>
        <p class="card-description">Lorem ipsum dolor sit amet consectetur adipiscing elit. Velit, facere debitis omnis.</p>
      </div>

      <div class="card">
        <div class="card-icon">
        <i class="uil uil-flower"></i>
        </div>
        <h3 class="card-title">What is Lorem Ipsum?</h3>
        <p class="card-description">Lorem ipsum dolor sit amet consectetur adipiscing elit. Velit, facere debitis omnis.</p>
      </div>

      <div class="card">
        <div class="card-icon">
        <i class="uil uil-palette"></i>
        </div>
        <h3 class="card-title">What is Lorem Ipsum?</h3>
        <p class="card-description">Lorem ipsum dolor sit amet consectetur adipiscing elit. Velit, facere debitis omnis.</p>
      </div>
    
  </section>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={Dove} alt="Dove" />
        </div>
        
      </div>

  
 
    </section>
  );
};

export default FeaturedBox;
