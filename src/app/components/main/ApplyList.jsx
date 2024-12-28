import React from "react";

export default function ApplyList({ formData }) {
  //console.log(formData[0].name);
  return (
    <ul className="h-fit border-blue-500 border-2 rounded-md px-5 py-3 flex flex-col justify-center items-center gap-2 ">
      {formData.map((data, index) => (
        <div
          key={index}
          className="px-5 py-3 flex justify-between  lg:gap-60 md:gap-52 sm:gap-40 shadow-md"
        >
          <li>{data.name}</li>
          <li>
            {data.phone1}-{data.phone2}-****
          </li>
          <li className="bg-black text-white ">신청완료</li>
        </div>
      ))}
    </ul>
  );
}
