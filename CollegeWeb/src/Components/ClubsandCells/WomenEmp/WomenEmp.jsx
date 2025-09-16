// src/components/WomenEmpCell.jsx
import React from "react";
import "./WomenEmpCell.css";

const WomenEmpCell = () => {
  return (
    <div className="womenemp-container">
      {/* ===== Banner Section ===== */}
      <div
        className="womenemp-header"
        style={{
          backgroundImage:
            "url('https://www.auucea.edu.in/assets/images/main-slider/banner1.jpg')",
        }}
      >
        <div className="overlay">
          <h1 className="title">Women Empowerment Cell</h1>
          <nav className="breadcrumb">
            <span>Home / Clubs And Cells / </span>
            <span>Women Empowerment Cell</span>
          </nav>
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <section className="womenemp-main">
        <div className="womenemp-description">
          <h2>Women Empowerment Cell</h2>
          <p>
            Women Cell of University College of Engineering is established with
            the motto of “towards self empowered mind“. The cell aims to empower
            girl students and faculty, enhance their understanding of issues
            related to women and to make the college campus a safe place for
            girls and women and to address the practical issues related to the
            welfare and equal opportunities for Women faculty, staff and
            students. With a view to take up women’s issues and problems, the
            cell aims at creating awareness of their rights and duties. It also
            provides a platform for women to share their experiences and views
            regarding their status in the society.
          </p>

          <h2>Women Health</h2>
          <p>
            The women empowerment cell is dedicated to the goal of promoting
            overall health and mental, physical, social well being of women and
            girls throughout the campus. Women and girls face distinct
            challenges and problems in day to day life...
          </p>

          <h2>Self Defense</h2>
          <p>
            Just one thing for the women to understand - “Everything depends
            upon your perspective of seeing yourself.” Women aren’t weak. They
            are such powerful beings, and it is unfair to be the victims...
          </p>

          <h2>Women Entrepreneurship</h2>
          <p>
            Women entrepreneurs are those women who innovate, initiate or adopt
            a business activity”. - Schumpeter. The status of women
            entrepreneurs is essential for economic growth...
          </p>
        </div>

        {/* Coordinators */}
        <div className="coordinators">
          <div className="coordinator-card">
            <h3>Dr N. SHOBANADEVI, Co-ordinator</h3>
            <p>📞 986534004</p>
            <p>📧 shobanadevi1975@gmail.com</p>
          </div>

          <div className="coordinator-card">
            <h3>A. ARIVAZHAGI, Co-coordinator</h3>
            <p>📞 9655216500</p>
            <p>📧 arivu.ucea@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenEmpCell;
