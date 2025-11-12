import React, { useState } from 'react';
// This component uses the same shared CSS file
import '../DepartmentDetail.css';

// --- Data for the ME faculty members ---
const meTeachingFaculty = [
  {
    name: 'I. Aardi',
    designation: 'Teaching Fellow',
    qualification: 'B.E (Mech), M.E (Automobile Engineering)',
    experience: '7 Years',
    email: 'rd.tanjore@gmail.com',
    imageUrl: 'https://www.auucea.edu.in/FacultyImage/I.Aardi.jpg'
  }
  // Add more teaching faculty here as needed
];

// Non-teaching staff list is empty based on the screenshot
const meNonTeachingFaculty = [];


const ME = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('overview');

  // Function to render the content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <p>
              The Department of Mechanical Engineering forms the core of engineering, focusing on the design, analysis, manufacturing, and maintenance of mechanical systems. Established with a commitment to excellence, the department is equipped with state-of-the-art laboratories and workshops. Our dedicated faculty members, with their extensive academic and industrial experience, guide students through a comprehensive curriculum that blends theoretical knowledge with practical application. We aim to produce skilled engineers who can solve complex problems and contribute to technological advancements.
            </p>
          </div>
        );
      case 'courses':
        return (
          <div className="tab-content">
            <h3>Courses Offered</h3>
            <h4>UG Course</h4>
            <p>BE - Department Of Mechanical Engineering</p>
          </div>
        );
      case 'teaching':
        return (
          <div className="tab-content">
            <div className="faculty-list">
              {meTeachingFaculty.map((member, index) => (
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
            {meNonTeachingFaculty.length > 0 ? (
              <div className="faculty-list">
                {meNonTeachingFaculty.map((member, index) => (
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
            ) : (
              // Display a message if no non-teaching staff are listed
              <p>No non-teaching staff information is available at this time.</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="department-page">
      <div className="department-banner">
        <h1>Department Of Mechanical Engineering</h1>
        <p className="breadcrumbs">Home / Department / Department Of Mechanical Engineering</p>
      </div>

      <div className="department-container">
        <h2 className="department-title">Department Of Mechanical Engineering</h2>
        
        <div className="tabs-container">
          <button onClick={() => setActiveTab('overview')} className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}>
            Overview
          </button>
          <button onClick={() => setActiveTab('courses')} className={`tab-button ${activeTab === 'courses' ? 'active' : ''}`}>
            Courses
          </button>
          <button onClick={() => setActiveTab('teaching')} className={`tab-button ${activeTab === 'teaching' ? 'active' : ''}`}>
            Teaching Staff
          </button>
          <button onClick={() => setActiveTab('non-teaching')} className={`tab-button ${activeTab === 'non-teaching' ? 'active' : ''}`}>
            Non-Teaching Staff
          </button>
        </div>

        {renderTabContent()}
      </div>
    </div>
  );
};

export default ME;