import React from "react";
import Dove from "../assets/images/Dove.png";
import Shokubutsu from "../assets/images/Shokubutsu.png";

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
ครีมอาบน้ำ (หรือ"Body Wash") เป็นผลิตภัณฑ์ทำความสะอาดร่างกายที่มีลักษณะเป็นของเหลวคล้ายเจล
 ใช้สำหรับทำความสะอาดผิวระหว่างการอาบน้ำ ครีมอาบน้ำมักมีส่วนผสมที่ช่วยให้เกิดฟอง ทำให้ผิวรู้สึกสะอาดและสดชื่นหลังการใช้งาน ผลิตภัณฑ์นี้มีหลากหลายประเภทและสูตรที่ตอบโจทย์สภาพผิวและความต้องการที่แตกต่างกัน
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
            <a href="https://github.com/Kittipong001">
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
          <img src={Shokubutsu} alt="Shokubutsu" />
        </div>
        
      </div>

  
 
    </section>
  );
};

export default FeaturedBox;
