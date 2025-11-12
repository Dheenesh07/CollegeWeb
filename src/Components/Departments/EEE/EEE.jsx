import React, { useState } from 'react';
// This component uses the same shared CSS file
import '../DepartmentDetail.css';

// --- Placeholder Data for the EEE faculty members ---
const eeeTeachingFaculty = [
  {
    name: 'Dr. R. Meenakshi',
    designation: 'Professor',
    qualification: 'B.E (EEE), M.E (Power Systems), Ph.D.',
    experience: '18 Years',
    email: 'meenakshi.r@example.com',
    imageUrl: 'https://via.placeholder.com/120x140' // Replace with actual image URL
  },
  {
    name: 'Mr. K. Suresh',
    designation: 'Assistant Professor',
    qualification: 'B.E (EEE), M.E (Control Systems)',
    experience: '10 Years',
    email: 'suresh.k@example.com',
    imageUrl: 'https://via.placeholder.com/120x140' // Replace with actual image URL
  }
];

// Non-teaching staff list is empty
const eeeNonTeachingFaculty = [];


const EEE = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('overview');

  // Function to render the content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <p>
              The Department of Electrical and Electronics Engineering is committed to providing a high-quality education in the fields of electrical machinery, power systems, control systems, and renewable energy. Our curriculum is designed to bridge the gap between theoretical foundations and practical applications, preparing students for the challenges of the modern electrical industry. With a team of highly qualified faculty and well-equipped laboratories, we strive to foster an environment of academic excellence and innovation.
            </p>
          </div>
        );
      case 'courses':
        return (
          <div className="tab-content">
            <h3>Courses Offered</h3>
            <h4>UG Course</h4>
            <p>BE - Department Of Electrical and Electronics Engineering</p>
          </div>
        );
      case 'teaching':
        return (
          <div className="tab-content">
            <div className="faculty-list">
              {eeeTeachingFaculty.map((member, index) => (
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
            {eeeNonTeachingFaculty.length > 0 ? (
              <div className="faculty-list">
                {/* This part will render if you add non-teaching staff to the array */}
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
        <h1>Department Of Electrical and Electronics Engineering</h1>
        <p className="breadcrumbs">Home / Department / Department Of Electrical and Electronics Engineering</p>
      </div>

      <div className="department-container">
        <h2 className="department-title">Department Of Electrical and Electronics Engineering</h2>
        
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

export default EEE;