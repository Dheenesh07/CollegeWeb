import React from "react";
import "./AICTE.css";

const COMMITTEES = [
  { label: "Mandatory Disclosure", file: "/files/F.pdf" },
  { label: "SC/ST Committee", file: "/files/Fi.pdf" },
  { label: "Anti Ragging Committee", file: "/files/S.pdf" },
  { label: "IQAC Committee", file: "/files/Si.pdf" },
  { label: "Grievances Redressal Committee", file: "/files/T.pdf" },
  { label: "Internal Complaint Committee", file: "/files/Fo.pdf" },
];

export default function AICTE() {
  return (
    <div className="aicte-page">
      
      <div className="top-strip" />

  
      <header className="banner">
        <img src="/bread.jpg" alt="College building" className="banner-img" />
        <div className="banner-fade" />
        <div className="banner-left">
          <h1 className="banner-title">AICTE</h1>
          <p className="breadcrumb">
            <span className="crumb-home">Home</span>
            <span className="crumb-sep"> / </span>
            <span className="crumb-current">AICTE</span>
          </p>
        </div>
      </header>

    
      <main className="container">
        <div className="red-bar">AICTE</div>

        <ul className="committees-grid">
          {COMMITTEES.map((item) => (
            <li key={item.label}>
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="committee-card1"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
