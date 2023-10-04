import React from "react";

function AddStudent() {
  return (
    <div>
      <div className="flex flex-col gap-3 mt-10">
        <input className="px-2 rounded" placeholder="Student ID" />
        <input className="px-2 rounded" placeholder="Student name" />
        <div className="flex justify-between">
          <input className="px-2 rounded" placeholder="Subject1 name" />
          <input className="px-2 rounded" placeholder="Subject1 marks" />
        </div>
        <div className="flex justify-between">
          <input className="px-2 rounded" placeholder="Subject2 name" />
          <input className="px-2 rounded" placeholder="Subject2 marks" />
        </div>
        <div className="flex justify-between">
          <input className="px-2 rounded" placeholder="Subject3 name" />
          <input className="px-2 rounded" placeholder="Subject3 marks" />
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
