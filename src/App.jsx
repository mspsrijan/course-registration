import Header from "./components/Header";
import Courses from "./components/Courses";
import Summaries from "./components/Summaries";
import { useState } from "react";

function App() {
  const [courseList, setCourseList] = useState([]);

  function handleAddCourse(course) {
    const addToCourseList = [...courseList, course];
    setCourseList(addToCourseList);
  }

  return (
    <div className="content-wrapper max-w-7xl mx-auto px-5 md:px-10">
      <Header></Header>
      <div className="main grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-span-1 lg:col-span-9">
          <Courses handleAddCourse={handleAddCourse}></Courses>
        </div>
        <div className="rounded-xl col-span-3">
          <Summaries courseList={courseList}></Summaries>
        </div>
      </div>
    </div>
  );
}

export default App;
