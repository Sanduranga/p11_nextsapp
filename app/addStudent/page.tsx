"use client";
import { fetchStudents } from "@/redux/features/student/studentSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddStudent() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
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
      // dispatch(fetchStudents() as any);
      router.push("/ourStudents");
    } catch (err) {}
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
