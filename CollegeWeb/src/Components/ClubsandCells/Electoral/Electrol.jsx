// src/components/Electrol.jsx
import React from "react";
import "./Electrol.css";

const Electrol = () => {
  return (
    <div>
      {/* Banner */}
      <div className="electrol-banner">
        <div className="banner-content">
          <h1 className="electrol-title">Electoral Literacy Club</h1>
          <nav className="electrol-breadcrumb">
            <a href="#">Home / Clubs And Cells / </a>
            <span className="highlight">Electoral Literacy Club</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="container">
        <div className="images-grid ">
          <img src="e1.jpeg" alt="Event 1" />
          <img src="e2.jpeg" alt="Event 2" />
          <img src="e3.jpeg" alt="Event 3" />
          <img src="e4.jpeg" alt="Event 4" />
          <img src="e5.jpeg" alt="Event 5" />
        </div>

        <h2>Objective</h2>
        <p>
          Alumni Cell can play an active role in voluntary programs like
          mentoring students in their areas of expertise. Alumni get in touch
          with students and share their expertise and best practices in a given
          field. University College of Engineering, Anna University (Ariyalur
          Campus) is proud to have as its alumni a group of about 6,000+
          engineers, technologists, entrepreneurs and Managers, bureaucrats all
          over the nation. The Institute acknowledges and takes immense pride in
          the role played by its Alumni in institute’s achievements and
          advancement.
        </p>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Electoral literacy club inauguration and voters awareness
                  program conducted among 450 students.
                </td>
                <td>19-03-2024</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Establishment of selfie - Point.</td>
                <td>19-03-2024</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Awareness program and pledge conducted among 250 students.
                </td>
                <td>16-04-2024</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="coordinators">
          <div className="coordinator-card">
            <h3>Dr S. RajaKumar, Co-ordinator</h3>
            <p>📞 9710120347</p>
            <p>📧 kumar.iem@gmail.com</p>
          </div>
          <div className="coordinator-card">
            <h3>K. Vasantha, Co-coordinator</h3>
            <p>📞 9655216500</p>
            <p>📧 vasantha.kumarasamy@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Electrol;
