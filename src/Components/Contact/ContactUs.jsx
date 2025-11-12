import React from "react";
import "./ContactUs.css";
import "../AICTE/AICTE.css"

export default function ContactUs() {
  return (
    <div className="contact-page">
      
      <header className="contact-banner">
        
        <img src="/bread.jpg" alt="College building" className="banner-img" />
        <div className="banner-overlay" />
        <div className="banner-content">
          <h1 className="banner-title">Contact Us</h1>
          <p className="breadcrumb">
            <a href="/" className="crumb-home">Home</a>
            <span className="crumb-sep"> / </span>
            <span className="crumb-current">Contact Us</span>
          </p>
        </div>
      </header>

    
      <main className="contact-container">
        
        <section className="contact-form">
          <h2 className="form-title">Contact Us</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Your phone" required />
              <input type="text" placeholder="Subject" required />
            </div>
            <textarea placeholder="Your message" rows="5" required />
            <div className="form-check">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">
                I agree to the <a href="#">terms</a> and{" "}
                <a href="#">privacy policy</a>
              </label>
            </div>
            <button type="submit" className="submit-btn">
              Send message
            </button>
          </form>
        </section>

        
        <aside className="contact-info2">
          <div className="info-box">
            <h3>📞 Contact</h3>
            <p>04329-2917278</p>
            <p>📧 ucea@auucea.edu.in</p>
            <p>🌐 www.auucea.edu.in</p>
          </div>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Vilangudi, Trichy - Chidambaram NH81</p>
            <p>Ariyalur - 621 731</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐 Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦 Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
