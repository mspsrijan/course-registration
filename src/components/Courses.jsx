import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Course from "./Course";

function Courses({ handleAddCourse }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("course-data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleAddCourse={handleAddCourse}
        ></Course>
      ))}
    </div>
  );
}

Courses.propTypes = {
  handleAddCourse: PropTypes.func,
};

export default Courses;
