// src/components/DeanDesk.jsx
import "./DeanDesk.css";
import deanImg from "../../assets/dean.jpg";   
import bannerImg from "../../assets/banner.jpg"; 

export default function DeanDesk() {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="dean-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="banner-title">Dean</h1>
          <div className="breadcrumb">
            <a href="#">Home</a> / <a href="#">Administration</a> /{" "}
            <span>Dean</span>
          </div>
        </div>
      </div>

      {/* Dean Message Section */}
      <div className="dean-container">
        <div className="dean-left">
          <div className="dean-photo-wrapper">
            <img src={deanImg} alt="Dean" className="dean-img" />
            <div className="dean-name">Dr. Venkatesan M.E., Ph.D</div>
          </div>
        </div>
        <div className="dean-right">
          <h2 className="dean-heading">MESSAGE FROM DEAN'S DESK</h2>
          <p className="dean-text">
            University College of Engineering, Ariyalur the learners challenge
            assumptions, think beyond visible limits, and add the value of
            excellence in whatever they do. Grounded in our commitment to
            engineering education innovation and interdisciplinary research, we
            offer our students a rich educational experience, an experience that
            bonds intellectual rigor and cross-disciplinary breadth in an
            intimate, student-centered environment.
          </p>
          <p className="dean-text">
            Research is an integral and conclusively enhancing part of this
            experience. Today, we continue that legacy of innovation and
            leadership in undergraduate and professional education, and in
            research and technology transfer. The institution is its people –
            faculty, students, alumni and industries. Every aspect of our
            leadership, innovation, and growth comes from these sources. We
            seek, deliver and help you Achieve – Create – Excel ..
          </p>
        </div>
      </div>
    </div>
  );
}
