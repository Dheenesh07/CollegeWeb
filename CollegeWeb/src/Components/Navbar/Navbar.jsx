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
const Navbar = () => {
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
  return (
    <nav>
      <div className="nav-container">
        <ul>
          {navs.map((item, idx) => {
            if (noDropdown.includes(item)) {
              return <li key={idx}>{item}</li>;
            }
            return (
              <li key={idx} className="dropdown dropdown-toggle">
                {item}
                <ul className="dropdown-content">
                  {dropdownItems[item]?.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </li>
            );
          })}
          <li>
            <button>
              <i className="fas fa-phone"></i>&nbsp;&nbsp;Reach us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
