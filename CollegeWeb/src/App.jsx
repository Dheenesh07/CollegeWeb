<<<<<<< HEAD
import React from "react";
import ReachUsSidebar from "./components/ReachUsSidebar/ReachUsSidebar";
import CourseOffered from "./Components/CourseOffered/CourseOffered";
import DeanDesk from "./Components/Administration/DeanDesk";
import { ExamCell } from "./Components/Administration/ExamCell";

=======
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
>>>>>>> ff8454f676a6c29e01fbcc3adf67083771e9ea45
function App() {
  

  return (
<<<<<<< HEAD
    <div>
      {/* <h1>My Website</h1> */}
      {/* <ReachUsSidebar /> */}

      <CourseOffered/>
      <DeanDesk/>
      <ExamCell/>
    </div>
=======
    <BrowserRouter>
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
>>>>>>> ff8454f676a6c29e01fbcc3adf67083771e9ea45
  );
}
export default App;