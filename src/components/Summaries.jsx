import PropTypes from "prop-types";
import { useState } from "react";

function Summaries({ courseList, creditHour, price }) {
  return (
    <div className="bg-white rounded-lg p-5 flex flex-col gap-4">
      <p className="text-[#2F80ED] font-Bold text-lg">
        Credit Hour Remaining: {20 - creditHour}hr
      </p>
      <hr />

      <h3 className="text-[#1C1B1B] font-bold text-xl">Course Name</h3>
      <ol className="list-decimal px-5">
        {courseList.map((courseList) => (
          <li className="text-[#555555] text-sm" key={courseList.id}>
            {courseList.course_title}
          </li>
        ))}
      </ol>
      <hr />
      <p className="text-[#444444] font-medium">
        Total Credit Hour: {creditHour}
      </p>
      <hr />
      <p className="text-[#444444] font-semiBold">Total Price: {price}USD</p>
    </div>
  );
}

Summaries.propTypes = {
  courseList: PropTypes.array,
  creditHour: PropTypes.number,
  price: PropTypes.number,
};

export default Summaries;
