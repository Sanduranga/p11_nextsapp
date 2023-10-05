"use client";
import axios from "axios";
import React, { useState } from "react";

function AddStudent() {
  const [formData, setFormData] = useState({});
  const handleInputs = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/student",
        formData
      );
      alert(res.data.message);
    } catch (res) {
      alert(res);
    }
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
          name="studentName"
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
            name="subject1Marks"
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
            name="subject2Marks"
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
            name="subject3Marks"
          />
        </div>
        <button>Submite</button>
      </form>
    </div>
  );
}

export default AddStudent;
