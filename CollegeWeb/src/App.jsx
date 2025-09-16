import React from "react";
import ReachUsSidebar from "./components/ReachUsSidebar/ReachUsSidebar";
import CourseOffered from "./Components/CourseOffered/CourseOffered";
import DeanDesk from "./Components/Administration/DeanDesk";
import { ExamCell } from "./Components/Administration/ExamCell";

function App() {
  return (
    <div>
      {/* <h1>My Website</h1> */}
      {/* <ReachUsSidebar /> */}

      <CourseOffered/>
      <DeanDesk/>
      <ExamCell/>
    </div>
  );
}

export default App;
