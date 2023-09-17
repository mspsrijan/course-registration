import PropTypes from "prop-types";
import { BsCurrencyDollar, BsBook } from "react-icons/bs";

function Course({ course, handleAddCourse }) {
  const { course_title, course_image, description, price, credit_hour } =
    course;
  return (
    <div className="bg-white rounded-xl shadow-sm p-3 flex flex-col gap-2">
      <img className="w-full" src={course_image} alt="{course_title}" />
      <div className="p-2 flex flex-col gap-3">
        <h1 className="text-md font-semibold">{course_title}</h1>
        <p className="text-[#555] text-sm">{description}</p>
        <div className="flex justify-between">
          <h1 className="text-[#444] font-medium flex items-center gap-2">
            <BsCurrencyDollar />
            {price}
          </h1>
          <h1 className="text-[#444] font-medium flex items-center gap-2">
            <BsBook />
            {credit_hour}hr
          </h1>
        </div>
        <button
          className="bg-[#2F80ED] text-white mt-2 rounded-lg py-2 hover:bg-[#304c71]"
          onClick={() => handleAddCourse(course)}
        >
          Select
        </button>
      </div>
    </div>
  );
}

Course.propTypes = {
  course: PropTypes.object,
  handleAddCourse: PropTypes.func,
};
export default Course;
