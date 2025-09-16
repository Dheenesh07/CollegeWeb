import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'; 
import Home from './Components/Home/Home.jsx';
import AllDepartments from './Components/Departments/AllDepartments/AllDepartments';
import CE from './Components/Departments/CE/CE';
import CSE from './Components/Departments/CSE/CSE';
import ECE from './Components/Departments/ECE/ECE';
import EEE from './Components/Departments/EEE/EEE';
import ME from './Components/Departments/ME/ME';
import SAH from './Components/Departments/SAH/SAH';

function App() {
  return (
    <BrowserRouter>
      {/* The extra <Home/> component was removed from here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<AllDepartments />} />
        <Route path="/departments/ce" element={<CE />} />
        <Route path="/departments/cse" element={<CSE />} />
        <Route path="/departments/ece" element={<ECE />} />
        <Route path="/departments/eee" element={<EEE />} />
        <Route path="/departments/me" element={<ME />} />
        <Route path="/departments/sah" element={<SAH />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;