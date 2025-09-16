// src/components/TamilDevelopment.jsx
import React from "react";
import "./Tamil.css";

const TamilDevelopment = () => {
  return (
    <div className="tamil-container">
      {/* Banner Section */}
      <div className="tamil-banner">
        <div className="tamil-overlay">
          <h1 className="tamil-title">தமிழ் வளர்ச்சித் துறை</h1>
          <div className="tamil-breadcrumb">
            <a href="/">Home</a> / Clubs And Cells /{" "}
            <span>தமிழ் வளர்ச்சித் துறை</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="tamil-main">
        <h2>தமிழ் வளர்ச்சித் துறை</h2>
        <p>
          மொழி என்பது மனிதனை அடையாளப்படுத்தும் பண்டாட்டுக் கூறுகளில் ஒன்றாகும்.
          மொழி தானும் வளர்ந்து, தனனைப் பயன்படுத்தும் மனிதனையும் வளர்க்கும்
          தனியாற்றல் பெற்றது. எண்ணத்தின் வடிவமாகவும் நாகரிகத்தின் சின்னமாகவும்
          திகழும் மொழி, மனிதகுலத்தின் கருத்துப் பரிமாற்றத்தை செய்யவோடு மனித சமூக
          இணைப்புக்கும் துணை செய்கிறது.
        </p>

        {/* Coordinator Section */}
        <div className="tamil-coordinators">
          <div className="tamil-card">
            <h3>Dr.M.Margabandhu , Co-ordinator.</h3>
            <p>📞 6369787279</p>
            <p>📧 uceamarg@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TamilDevelopment;
