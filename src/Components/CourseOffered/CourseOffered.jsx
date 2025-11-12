// src/components/CourseOffered.jsx
import { useState } from "react";
import "./CourseOffered.css"; 
import bannerImg from "../../assets/banner.jpg"; 


const courses = [
  {
    title: "Civil Engineering",
    type: "UG Course",
    description: "BE - Department Of Civil Engineering",
  },
  {
    title: "Department Of Computer Science and Engineering",
    type: "UG Course",
    description: "BE - Department Of CSE",
  },
  {
    title: "Department Of Mechanical Engineering",
    type: "UG Course",
    description: "BE - Department Of Mechanical Engineering",
  },
  {
    title: "Department Of Electrical and Electronics Engineering",
    type: "UG Course",
    description: "BE - Department Of EEE",
  },
];

export default function CourseOffered() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCourse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>

    <div
        className="dean-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="banner-title">Courses Offered</h1>
          <div className="breadcrumb">
            <a href="#">Home</a> / <a href="#">Acadamics</a> /{" "}
            <span>Courses Offered</span>
          </div>
        </div>
      </div>

    {/* <div className="image-container">
        <img src="bread.jpg" alt="" className="background-image"/>
        <h1 className="overlay-text">Courses Offered</h1>
        <p id="under">Home / Acadamics /<span> Courses Offered</span></p>
    </div> */}

    <div className="course-container">
      <h1 className="course-title">Courses Offered</h1>

      {courses.map((course, index) => (
        <div
          key={index}
          className="course-item"
          onClick={() => toggleCourse(index)}
        >
          <div className="course-header">
            <h2>{course.title}</h2>
            <span className="course-toggle">
              {openIndex === index ? "−" : "+"}
            </span>
          </div>

          {openIndex === index && (
            <div className="course-content">
              <p className="course-type">{course.type}</p>
              <p className="course-description">{course.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
}
