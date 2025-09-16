
import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const images = [
    "https://www.auucea.edu.in/assets/images/main-slider/IMG-20250126-WA0002.jpg",
    "https://www.auucea.edu.in/assets/images/main-slider/IMG-20250127-WA0007.jpg",
    "https://www.auucea.edu.in/assets/images/main-slider/IMG-20250409-WA0008.jpg",
    "https://www.auucea.edu.in/assets/images/main-slider/banner1.jpg",
    "https://www.auucea.edu.in/assets/images/main-slider/Slider_10_05_20241.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {/* Full-Screen Slider */}
      <div className="slider-container">
        <button className="prev" onClick={prevSlide}>❮</button>
        <img
          src={images[currentIndex]}
          alt="slider"
          className="slider-image"
        />
        <button className="next" onClick={nextSlide}>❯</button>
      </div>

      {/* About Section */}
      <section className="about">
        <h2>About Our Institution</h2>
        <p>
          University College of Engineering, Anna University – Ariyalur was established as per the Govt Order: Ms. No 396 Higher Education (J-2) Department dated 26.09.2008 with the aim to provide quality Engineering education to the students from the backward districts and various parts of Tamil Nadu.
        </p>

        <h1>Departments</h1>
        <ul>
          <li>Computer Science and Engineering</li>
          <li>Electrical and Electronics Engineering</li>
          <li>Civil Engineering</li>
          <li>Mechanical Engineering</li>
          <li>Electronics and Communications Engineering</li>
          <li>Science and Humanities</li>
        </ul>
        <br />
        <div className="about-cards">
          <div className="card">
            <h3>Departments</h3>
            <p>6</p>
          </div>
          <div className="card">
            <h3>Students</h3>
            <p>2000+</p>
          </div>
          <div className="card">
            <h3>Staff</h3>
            <p>100+</p>
          </div>
          <div className="card">
            <h3>Total Programs</h3>
            <p>20</p>
          </div>
        </div>
      </section>

            {/* Committee Section */}
      <section className="committee">
        <h1>Vice-Chancellor Convener Committee</h1>
        <div className="committee-grid">
          <div className="committee-card">
            <img src="/chutki.jpg" alt="Vice Chancellor" />
            <h2>Vice-Chancellor</h2>
            <h4>Anna University, Chennai</h4>
          </div>
          <div className="committee-card">
            <img src="/Raju.jpg" alt="Registrar" />
            <h2>Registrar</h2>
            <h4>Anna University, Chennai</h4>
          </div>
          <div className="committee-card">
            <img src="/Kalia.jpg" alt="Director" />
            <h2>Director</h2>
            <h4>Anna University, Chennai</h4>
          </div>
          <div className="committee-card">
            <img src="/Chhota-Bheem-l.webp" alt="Dean" />
            <h2>Dean</h2>
            <h4>Anna University, Ariyalur Campus</h4>
          </div>
        </div>
      </section>

            {/* Events Section */}
      <section className="events">
        <h1>Upcoming Events</h1>
        <div className="events-grid">
          <div className="event-card">
            <h2>Technical Symposium</h2>
            <p>September 2025 – Organized by CSE Dept</p>
          </div>
          <div className="event-card">
            <h2>Sports Meet</h2>
            <p>October 2025 – Inter-college Competition</p>
          </div>
          <div className="event-card">
            <h2>Annual Day</h2>
            <p>November 2025 – Cultural Fest & Celebrations</p>
          </div>
        </div>
      </section>

        </div>
  );
}

export default Home;
