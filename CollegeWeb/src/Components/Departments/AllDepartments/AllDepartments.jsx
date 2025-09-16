import React from 'react';
import DepartmentCard from './DepartmentCard';
import './AllDepartments.css';

const departmentsData = [
  { code: 'ce', name: 'Civil Engineering', description: 'Building the future through structural design and transportation.', image: '/civil.jpg' },
  { code: 'cse', name: 'Computer Science Engineering', description: 'Exploring the cutting-edge of software development, AI, and data science.', image: '/cs.jpg' },
  { code: 'ece', name: 'Electronics & Communication', description: 'Focusing on the design of modern communication systems and circuits.', image: '/ece.jpg' },
  { code: 'eee', name: 'Electrical & Electronics', description: 'Mastering power systems, electrical machines, and renewable energy.', image: '/eee.jpg' },
  { code: 'me', name: 'Mechanical Engineering', description: 'The core of engineering, dealing with machine design and manufacturing.', image: '/mech.jpeg' },
  { code: 'sah', name: 'Science and Humanities', description: 'Providing the fundamental knowledge in Physics, Chemistry, and Mathematics.', image: '/arts.png' },
];

const AllDepartments = () => {
  return (
    <div className="departments-page">
      <div className="page-banner">
        <h1>Our Departments</h1>
        <p>Home / Departments</p>
      </div>
      <div className="departments-section-container">
        <div className="department-grid">
          {departmentsData.map((dept) => (
            <DepartmentCard
              key={dept.code}
              code={dept.code}
              name={dept.name}
              description={dept.description}
              image={dept.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDepartments;