import Header from "./components/Header";
import Courses from "./components/Courses";
import Summaries from "./components/Summaries";
import { useState } from "react";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [price, setPrice] = useState(0);

  function handleAddCourse(course) {
    const courseExists = courseList.some(
      (existingCourse) => existingCourse.course_title === course.course_title
    );
    const newTotalCreditHour = creditHour + course.credit_hour;

    if (!courseExists) {
      if (newTotalCreditHour <= 20) {
        const addToCourseList = [...courseList, course];
        setCourseList(addToCourseList);
        setCreditHour(newTotalCreditHour);
        setPrice(price + course.price);
      } else {
        alert("Adding this course would exceed 20 credit hours.");
      }
    } else {
      alert("This course is already in your list.");
    }
  }

  return (
    <div className="content-wrapper max-w-7xl mx-auto px-5 md:px-10">
      <Header></Header>
      <div className="main grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-span-1 lg:col-span-9">
          <Courses handleAddCourse={handleAddCourse}></Courses>
        </div>
        <div className="rounded-xl col-span-3">
          <Summaries
            courseList={courseList}
            creditHour={creditHour}
            price={price}
          ></Summaries>
        </div>
      </div>
    </div>
  );
}

export default App;
