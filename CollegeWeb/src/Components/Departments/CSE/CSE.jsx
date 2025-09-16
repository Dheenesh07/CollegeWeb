import React, { useState } from 'react';
// This component uses the same shared CSS file
import '../DepartmentDetail.css';

// --- Data for the CSE faculty members ---
const cseTeachingFaculty = [
  {
    name: 'Dr S.Jayanthi',
    designation: 'HOD, Assistant Professor',
    qualification: 'B.E(CSE), M.Tech(Advanced Computing), Ph.D.',
    experience: '26 Years',
    email: 'rajagopal6@gmail.com',
    imageUrl: 'person8.jpg' 
  },
  {
    name: 'G.Gogul Karthik',
    designation: 'Assistant Professor',
    qualification: 'B.Tech(IT), M.Tech(IT), (Ph.D)',
    experience: '14 Years',
    email: 'gogul_int99@yahoo.co.in',
    imageUrl: 'https://www.auucea.edu.in/FacultyImage/G.Gogul%20karthik.jpg'
  },
  {
    name: 'S.Athistalakshmi',
    designation: 'Teaching Fellow',
    qualification: 'B.E(CSE), M.E(CSE), (Ph.D).',
    experience: '10 Years',
    email: 'lakshmi.ucea@gmail.com',
    imageUrl: 'https://www.auucea.edu.in/FacultyImage/S.Athistalakshmi.jpg'
  },
   {
    name: 'Dr.K.Pazhanisamy',
    designation: 'Teaching Fellow',
    qualification: 'B.TECH(IT), M.E(CSE), Ph.d,',
    experience: '15 Years',
    email: 'kpsamy08@gmail.com',
    imageUrl: 'https://www.auucea.edu.in/FacultyImage/pazhanisamy.jpg'
  }
];

const cseNonTeachingFaculty = [
  {
    name: 'G.SENTHAMIL SELVAM',
    designation: 'Professional Assistant - II',
    qualification: 'MCA',
    imageUrl: 'https://www.auucea.edu.in/FacultyImage/G.SENTHAMIL%20SELVAM.jpg'
  },
  {
    name: 'S.KARIKALAN',
    designation: 'Professional Assistant - III',
    qualification: 'DEEE',
    imageUrl: 'https://www.auucea.edu.in/FacultyImage/S.KARIKALAN.jpg'
  },
  {
    name: 'A.LEETHIDAYANA',
    designation: 'Professional Assistant - III',
    qualification: 'DECE',
    imageUrl: 'https://www.auucea.edu.in/FacultyImage/A.LEETHIDAYANA.jpg'
  }
];


const CSE = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('overview');

  // Function to render the content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <p>
              Our department is indeed special, offering students and faculty an unusual blend of very high expectations and exceptional quality of life. Computer science and engineering is an important field for technological advancements and plays a vital role in many interdisciplinary fields as well. The department is running with eminent faculties and well equipped laboratories. Our aim is to impart very good knowledge and skills to the students in various areas such as Computer Networks, Data Science, Big Data, Machine Learning, Internet of Things and programming languages in preparing future technology innovation.
            </p>
          </div>
        );
      case 'courses':
        return (
          <div className="tab-content">
            <h3>Courses Offered</h3>
            <h4>UG Course</h4>
            <p>BE - Department Of Computer Science and Engineering</p>
          </div>
        );
      case 'teaching':
        return (
          <div className="tab-content">
            <div className="faculty-list">
              {cseTeachingFaculty.map((member, index) => (
                <div key={index} className="faculty-card">
                  <img src={member.imageUrl} alt={member.name} className="faculty-image" />
                  <div className="faculty-details">
                    <h4>{member.name} - <span>{member.designation}</span></h4>
                    <p><strong>Qualification:</strong> {member.qualification}</p>
                    <p><strong>Experience [UG]:</strong> {member.experience}</p>
                    <p><strong>Email:</strong> {member.email}</p>
                    <button className="profile-button">View Profile</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'non-teaching':
        return (
          <div className="tab-content">
            <div className="faculty-list">
              {cseNonTeachingFaculty.map((member, index) => (
                <div key={index} className="faculty-card">
                  <img src={member.imageUrl} alt={member.name} className="faculty-image" />
                  <div className="faculty-details">
                    <h4>{member.name} - <span>{member.designation}</span></h4>
                    <p><strong>Qualification:</strong> {member.qualification}</p>
                    <button className="profile-button">View Profile</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="department-page">
      <div className="department-banner">
        <h1>Department Of Computer Science and Engineering</h1>
        <p className="breadcrumbs">Home / Department / Department Of Computer Science and Engineering</p>
      </div>

      <div className="department-container">
        <h2 className="department-title">Department Of Computer Science and Engineering</h2>
        
        <div className="tabs-container">
          <button onClick={() => setActiveTab('overview')} className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}>
            Overview
          </button>
          <button onClick={() => setActiveTab('courses')} className={`tab-button ${activeTab === 'courses' ? 'active' : ''}`}>
            Courses
          </button>
          <button onClick={() => setActiveTab('teaching')} className={`tab-button ${activeTab === 'teaching' ? 'active' : ''}`}>
            Teaching Faculty
          </button>
          <button onClick={() => setActiveTab('non-teaching')} className={`tab-button ${activeTab === 'non-teaching' ? 'active' : ''}`}>
            Non Teaching Faculty
          </button>
        </div>

        {renderTabContent()}
      </div>
    </div>
  );
};

export default CSE;