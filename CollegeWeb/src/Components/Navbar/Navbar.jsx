import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";

const navs = [
  "Home",
  "Academics",
  "Administration",
  "Departments",
  "Clubs and Cells",
  "Campus Life",
  "Resources",
  "AICTE",
  "Contact",
];

const dropdownItems = {
  Academics: ["Courses Offered"],
  Administration: ["Dean Desk", "Dean Office", "Exam Cell"],
  Departments: [
    "All Courses",
    "Civil Engineering",
    "Computer Science Engineering",
    "Electronics and Communications Engineering",
    "Electrical and Electronics Engineering",
    "Mechanical Engineering",
    "Science and Humanities",
  ],
  "Clubs and Cells": [
    "Alumni Cell",
    "Anti Ragging Cell",
    "Training and Placement Cell",
    "Women Empowerment Cell",
    "Cultural Cell",
    "Sports Club",
  ],
  "Campus Life": [
    "NSS",
    "YRC",
    "Library",
    "Sports & Fitness",
    "Hostel & Dining",
    "Health & Wellbeing",
  ],
};

const noDropdown = ["Home", "Resources", "AICTE", "Contact"];

// Map menu labels to actual routes in App.jsx
const routes = {
  Home: "/",
  "Courses Offered": "/courses-offered",
  "Dean Desk": "/deans-desk",
  "Exam Cell": "/exam-cell",
  "All Courses": "/departments",
  "Civil Engineering": "/departments/ce",
  "Computer Science Engineering": "/departments/cse",
  "Electronics and Communications Engineering": "/departments/ece",
  "Electrical and Electronics Engineering": "/departments/eee",
  "Mechanical Engineering": "/departments/me",
  "Science and Humanities": "/departments/sah",
  Resources: "/resources", 
  AICTE: "/AICTE", 
  Contact: "/contact",
};

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <ul>
          {navs.map((item, idx) => {
            if (noDropdown.includes(item)) {
              return (
                <li key={idx}>
                  <Link to={routes[item] || "#"}>{item}</Link>
                </li>
              );
            }
            return (
              <li key={idx} className="dropdown dropdown-toggle">
                {item}
                <ul className="dropdown-content">
                  {dropdownItems[item]?.map((d, i) => (
                    <li key={i}>
                      <Link to={routes[d] || "#"}>{d}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
          <li>
            <Link to="/reach-us">
              <button>
                <i className="fas fa-phone"></i>&nbsp;&nbsp;Reach us
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
