"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function AddStudent() {
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const handleInputs = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/student", {
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
          placeholder="Student name"
          name="studentName"
        />
        <input
          onChange={handleChange}
          className="px-2 rounded"
          placeholder="Student ID"
          name="studentId"
        />

        <input
          onChange={handleChange}
          className="px-2 rounded"
          placeholder="Gender"
          name="gender"
        />
        <div className="flex justify-between">
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder="Subject name"
            name="subjectName"
          />
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder="Subject marks"
            name="subjectMarks"
          />
        </div>
        <button className="p-2 bg-blue-700 text-white font-bold">Submit</button>
      </form>
    </div>
  );
}

export default AddStudent;
