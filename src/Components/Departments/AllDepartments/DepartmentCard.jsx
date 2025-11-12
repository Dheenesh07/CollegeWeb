import React from 'react';
import { Link } from 'react-router-dom';
import './AllDepartments.css'; 

const DepartmentCard = ({ code, name, description, image }) => {
  return (
    <div className="department-card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={`/departments/${code}`} className="read-more-btn">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default DepartmentCard;