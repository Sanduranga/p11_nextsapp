"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function AddStudent() {
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const handleInputs = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/student", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Failed to update student");
      }
      router.push("/ourStudents");
    } catch (err) {
      alert(err);
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
          name="studentId"
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
        <button className="p-2 bg-blue-700 text-white font-bold">
          Submite
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
