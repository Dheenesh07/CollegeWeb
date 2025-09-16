import React, { useState } from 'react'; // We will create this CSS file next

// --- Data for the faculty members ---
const teachingFaculty = [
  {
    name: 'Dr. V. Venkatesan',
    designation: 'HOD, Assistant Professor',
    qualification: 'B.E (Civil), M.E (Water Resources), Ph.D.',
    experience: '20 Years',
    email: 'mailcvvn6030@gmail.com',
    imageUrl: 'person8.jpg' // Using actual image URL
  },
  {
    name: 'Dr. G. Vijayakumar',
    designation: 'Assistant Professor',
    qualification: 'B.E (Civil), M.E (Water Resources), M.B.A(Personal), Ph.D',
    experience: '15 Years',
    email: 'vijay@gmail.com',
    imageUrl: 'https://www.auucea.edu.in/FacultyImage/Dr.G.Vijayakumar.jpg'
  }
];

const nonTeachingFaculty = [
  {
    name: 'K. Ravichandran',
    designation: 'Professional Assistant-III',
    qualification: 'Diploma (Mechanical Engineering)',
    email: 'ksrravi@gmail.com'
  },
  {
    name: 'Prabhakaran',
    designation: 'Professional Assistant-III',
    qualification: 'Diploma (Mechanical Engineering)',
    email: 'admin@gmail.com'
  },
  {
    name: 'S. Malaya perumal',
    designation: 'Professional Assistant-II',
    qualification: 'Diploma (Mechanical Engineering)',
    email: 'perumalmechdme@gmail.com'
  }
];


const CE = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('overview');

  // Function to render the content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <p>
              The Department of Civil Engineering was established in the year 2009 and is part of the institute since its inception. The department runs successfully with highly qualified, knowledgeable and energetic faculties with an average teaching experience of 15 years. Our department has 290 students in total i.e., 82 in final year, 65 in 3rd year Tamil, 66 in 3rd year English, 26 in 2nd year Tamil and 71 in 2nd year English. The students of our department are meritorious and have an average cut-off of 85%. The entire batch of students is admitted through single window counseling. We follow the curriculum of Anna University, Chennai.
            </p>
          </div>
        );
      case 'courses':
        return (
          <div className="tab-content">
            <h3>Courses Offered</h3>
            <h4>UG Course</h4>
            <p>BE - Department Of Civil Engineering</p>
          </div>
        );
      case 'teaching':
        return (
          <div className="tab-content">
            <div className="faculty-list">
              {teachingFaculty.map((member, index) => (
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
              {nonTeachingFaculty.map((member, index) => (
                <div key={index} className="faculty-card">
                  <div className="avatar-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                  </div>
                  <div className="faculty-details">
                    <h4>{member.name} - <span>{member.designation}</span></h4>
                    <p><strong>Qualification:</strong> {member.qualification}</p>
                    <p><strong>Email:</strong> {member.email}</p>
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
        <h1>Department Of Civil Engineering</h1>
        <p className="breadcrumbs">Home / Department / Department Of Civil Engineering</p>
      </div>

      <div className="department-container">
        <h2 className="department-title">Department Of Civil Engineering</h2>
        
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

export default CE;