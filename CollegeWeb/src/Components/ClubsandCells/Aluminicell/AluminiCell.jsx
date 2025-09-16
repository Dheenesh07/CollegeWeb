import React from "react";
import "./AluminiCell.css";

const AlumniCell = () => {
  return (
    <div className="alumni-container">
      <header className="alumni-header">
        <div className="overlay">
          <h1 className="title">Alumni Cell</h1>
          <nav className="breadcrumb">
            <a href="/">Home</a> / <a href="/clubs">Clubs And Cells</a> /{" "}
            <span>Alumni Cell</span>
          </nav>
        </div>
      </header>

      <main className="alumni-main">
        <a href="#registration" className="register-button">
          For Alumni Registration
        </a>

        <section className="alumni-description">
          <h2>Alumni Cell</h2>
          <p>
            Alumni Cell can play an active role in voluntary programs like
            mentoring students in their areas of expertise. Alumni get in touch
            with students and share their expertise and best practices in a
            given field. University College of Engineering, Anna University
            (Ariyalur Campus) is proud to have as its alumni a group of about
            6,000+ engineers, technologists, entrepreneurs and Managers,
            bureaucrats all over the nation. The Institute acknowledges and
            takes immense pride in the role played by its Alumni in institute’s
            achievements and advancement.
          </p>
        </section>

        <section className="coordinators">
          <div className="coordinator-card">
            <h3>Dr S.RajaKumar , Co-ordinator.,</h3>
            <p>
              <span className="icon">📞</span> 9710120347
            </p>
            <p>
              <span className="icon">✉️</span> kumar.iem@gmail.com
            </p>
          </div>

          <div className="coordinator-card">
            <h3>K.VASANTHA , Co-coordinator</h3>
            <p>
              <span className="icon">📞</span> 9655216500
            </p>
            <p>
              <span className="icon">✉️</span> vasantha.kumarasamy@gmail.com
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AlumniCell;
