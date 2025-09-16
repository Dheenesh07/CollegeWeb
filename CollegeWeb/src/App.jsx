import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ReachUsPage from "./Components/ReachUsSidebar/ReachUsSidebar";
import EventsPage from "./Components/Events/EventsSection"; 
import CourseOffered from "./Components/CourseOffered/CourseOffered";
import DeanDesk from "./Components/Administration/DeanDesk";
import { ExamCell } from "./Components/Administration/ExamCell";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ContactUs from "./Components/Contact/ContactUs.jsx";
import AICTE from "./Components/AICTE/AICTE.jsx";
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
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<AllDepartments />} />
        <Route path="/departments/ce" element={<CE />} />
        <Route path="/departments/cse" element={<CSE />} />
        <Route path="/departments/ece" element={<ECE />} />
        <Route path="/departments/eee" element={<EEE />} />
        <Route path="/departments/me" element={<ME />} />
        <Route path="/departments/sah" element={<SAH />} />

        <Route path="/courses-offered" element={<CourseOffered />} />
        <Route path="/deans-desk" element={<DeanDesk />} />
        <Route path="/exam-cell" element={<ExamCell />} />
        
        <Route path="/reach-us" element={<ReachUsPage />} /> 
        <Route path="/events" element={<EventsPage />} /> 
        
         
        <Route path="/contact" element={<ContactUs/>} /> <Route/>
        <Route path="/AICTE" element={<AICTE/>} /> <Route/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;