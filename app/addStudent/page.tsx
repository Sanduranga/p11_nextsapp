"use client";
import React, { useState } from "react";

function AddStudent() {
  const [formData, setFormData] = useState({});
  const [submitData, setSubmitData] = useState({});
  const handleInputs = (e: any) => {
    console.log(formData);
    e.preventDefault();
  };
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleInputs} className="flex flex-col gap-3 mt-10">
        <input
          onChange={handleChange}
          className="px-2 rounded"
          placeholder="Student ID"
          name="id"
        />
        <input
          onChange={handleChange}
          className="px-2 rounded"
          placeholder="Student name"
          name="StudentName"
        />
        <div className="flex justify-between">
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder="Subject1 name"
            name="subject1Name"
          />
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder="Subject1 marks"
            name="marks1"
          />
        </div>
        <div className="flex justify-between">
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder="Subject2 name"
            name="subject2Name"
          />
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder="Subject2 marks"
            name="marks2"
          />
        </div>
        <div className="flex justify-between">
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder="Subject3 name"
            name="subject3Name"
          />
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder="Subject3 marks"
            name="marks3"
          />
        </div>
        <button>Submite</button>
      </form>
    </div>
  );
}

export default AddStudent;
