// src/components/PlacementCell.jsx
import React from "react";
import "./PlacementCell.css"; // custom CSS

const PlacementCell = () => {
  return (
    <div className="placement-container">
      {/* ===== Banner Section ===== */}
      <div className="placement-header">
        <div className="placement-overlay">
          <h1 className="placement-title">Placement Cell</h1>
          <nav className="placement-breadcrumb">
            <a href="#">Home / Clubs And Cells / </a>
            <span>Placement Cell</span>
          </nav>
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <section className="placement-main">
        <h2>Placement Cell</h2>
        <p>
          The Training & Placement cell of UCEA was established in the year 2010
          which is an integral part of this institution. Since its inception,
          the T & P cell of UCEA aspires to produce professionals with sound
          technical skills and desires to make them compete in global arena. In
          the journey towards excellence, many milestones were also set by the
          Department of Placements in terms of Quality and Quantity. The
          excellent infrastructure facilitates different activities of placement
          like pre-placement talks, written tests, group discussions, and
          interviews as per the requirements of the organizations. The
          consistent placement record illustrates the commitment towards
          progress of the institution.
        </p>

        <h2>Vision:</h2>
        <p>
          To reduce the gap between candidate skills + knowledge and the
          industry needs by producing competent resources equipped with
          personality development and campus recruitment training along with
          professional etiquette & providing them the best possible
          opportunities to thrive in their career.
        </p>

        <h2>Mission:</h2>
        <p>
          The Training and Placement Team of UCEA is dedicated towards achieving
          100% placements and leaves no stone unturned in preparing Recruitment
          schedule of the year by inviting HR Teams of different corporates to
          ensure the smooth functioning of the Campus-Recruitment process.
          Meanwhile, numerous Training programs, Workshops, Seminars, Industry
          interactions, and also industry visits are conducted parallely with
          Regular one-on-one counseling for betterment of the students facing
          difficulties in interviews. Faculty Development Programs are conducted
          concentrating on 360 degree improvement in student performance through
          the skill development of the faculty. The Entrepreneurship Development
          area also is encouraged & monitored with the view making Job-Creators
          apart from Job-Seekers
        </p>

        {/* ===== Coordinators ===== */}
        <div className="placement-coordinators">
          <div className="placement-card">
            <h3>Dr S. RajaKumar, Co-ordinator</h3>
            <p>
              <span className="icon">📞</span> 9710120347
            </p>
            <p>
              <span className="icon">📧</span> kumar.iem@gmail.com
            </p>
          </div>

          <div className="placement-card">
            <h3>K. Vasantha, Co-coordinator</h3>
            <p>
              <span className="icon">📞</span> 9655216500
            </p>
            <p>
              <span className="icon">📧</span> vasantha.kumarasamy@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementCell;
