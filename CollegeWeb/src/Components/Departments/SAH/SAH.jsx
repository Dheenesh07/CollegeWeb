import React, { useState } from 'react';
// This component uses the same shared CSS file
import '../DepartmentDetail.css';

// --- Placeholder Data for the SAH faculty members ---
const sahTeachingFaculty = [
  {
    name: 'Dr. A.M. Murugan',
    designation: 'Associate Professor (Physics)',
    qualification: 'M.Sc (Physics), M.Phil, Ph.D.',
    experience: '16 Years',
    email: 'murugan@example.com',
    imageUrl: 'https://via.placeholder.com/120x140' // Replace with actual image URL
  },
  {
    name: 'Dr. B. Geetha',
    designation: 'Associate Professor (Chemistry)',
    qualification: 'M.Sc (Chemistry), Ph.D.',
    experience: '14 Years',
    email: 'geetha.b@example.com',
    imageUrl: 'https://via.placeholder.com/120x140' // Replace with actual image URL
  },
  {
    name: 'Mr. M. Senthil',
    designation: 'Assistant Professor (Mathematics)',
    qualification: 'M.Sc (Mathematics), M.Phil',
    experience: '11 Years',
    email: 'senthil.m@example.com',
    imageUrl: 'https://via.placeholder.com/120x140' // Replace with actual image URL
  }
];

// Non-teaching staff list is empty
const sahNonTeachingFaculty = [];


const SAH = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('overview');

  // Function to render the content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <p>
              The Department of Science and Humanities serves as the foundation for all engineering disciplines. We are dedicated to providing a strong understanding of fundamental principles in Physics, Chemistry, Mathematics, and English. Our goal is to equip first-year students with the essential analytical, scientific, and communication skills necessary to excel in their chosen engineering fields. The department fosters a learning environment that encourages critical thinking and a passion for lifelong learning.
            </p>
          </div>
        );
      case 'courses':
        return (
          <div className="tab-content">
            <h3>Subjects Offered</h3>
            <p>The department provides foundational courses for all first-year B.E. students, including:</p>
            <ul>
              <li>Engineering Physics</li>
              <li>Engineering Chemistry</li>
              <li>Engineering Mathematics (I & II)</li>
              <li>Communication Skills in English</li>
            </ul>
          </div>
        );
      case 'teaching':
        return (
          <div className="tab-content">
            <div className="faculty-list">
              {sahTeachingFaculty.map((member, index) => (
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
            {sahNonTeachingFaculty.length > 0 ? (
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
        <h1>Department Of Science and Humanities</h1>
        <p className="breadcrumbs">Home / Department / Department Of Science and Humanities</p>
      </div>

      <div className="department-container">
        <h2 className="department-title">Department Of Science and Humanities</h2>
        
        <div className="tabs-container">
          <button onClick={() => setActiveTab('overview')} className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}>
            Overview
          </button>
          <button onClick={() => setActiveTab('courses')} className={`tab-button ${activeTab === 'courses' ? 'active' : ''}`}>
            Subjects
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

export default SAH;