function Summaries() {
  return (
    <div className="bg-white rounded-lg p-5 flex flex-col gap-4">
      <p className="text-[#2F80ED] font-Bold text-lg">
        Credit Hour Remaining: 7hr
      </p>
      <hr />
      <h3 className="text-[#1C1B1B] font-bold text-xl">Course Name</h3>
      <ol className="list-decimal px-5">
        <li className="text-[#555555] text-sm">Introduction to Algorithms</li>
        <li className="text-[#555555] text-sm">Introduction to C++ for DSA</li>
        <li className="text-[#555555] text-sm">Basic Data Structures</li>
      </ol>
      <hr />
      <p className="text-[#444444] font-medium">Total Credit Hour: 13</p>
      <hr />
      <p className="text-[#444444] font-semiBold">Total Price: 48000USD</p>
    </div>
  );
}

export default Summaries;
