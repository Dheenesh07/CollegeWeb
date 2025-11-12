import React, { useState } from 'react';
// This component uses the same shared CSS file
import '../DepartmentDetail.css';

// --- Placeholder Data for the ECE faculty members ---
const eceTeachingFaculty = [
  {
    name: 'Dr. A. Kumaravel',
    designation: 'Professor & Head',
    qualification: 'B.E (ECE), M.E (Communication Systems), Ph.D.',
    experience: '22 Years',
    email: 'kumaravel.a@example.com',
    imageUrl: 'https://via.placeholder.com/120x140' // Replace with actual image URL
  },
  {
    name: 'Mrs. S. Priya',
    designation: 'Assistant Professor',
    qualification: 'B.E (ECE), M.E (VLSI Design)',
    experience: '12 Years',
    email: 'priya.s@example.com',
    imageUrl: 'https://via.placeholder.com/120x140' // Replace with actual image URL
  }
];

// Non-teaching staff list is empty
const eceNonTeachingFaculty = [];


const ECE = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('overview');

  // Function to render the content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <p>
              The Department of Electronics and Communication Engineering is dedicated to producing highly competent engineers equipped with the latest knowledge in the ECE field. The department focuses on key areas such as VLSI design, embedded systems, signal processing, and communication networks. With a blend of experienced faculty and advanced laboratory facilities, we provide students with a robust platform for learning and innovation, preparing them for successful careers in a constantly evolving industry.
            </p>
          </div>
        );
      case 'courses':
        return (
          <div className="tab-content">
            <h3>Courses Offered</h3>
            <h4>UG Course</h4>
            <p>BE - Department Of Electronics and Communication Engineering</p>
          </div>
        );
      case 'teaching':
        return (
          <div className="tab-content">
            <div className="faculty-list">
              {eceTeachingFaculty.map((member, index) => (
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
            {eceNonTeachingFaculty.length > 0 ? (
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
        <h1>Department Of Electronics and Communication Engineering</h1>
        <p className="breadcrumbs">Home / Department / Department Of Electronics and Communication Engineering</p>
      </div>

      <div className="department-container">
        <h2 className="department-title">Department Of Electronics and Communication Engineering</h2>
        
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

export default ECE;