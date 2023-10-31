"use client";
import { fetchStudents } from "@/redux/features/student/studentSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function EditForm({
  _id,
  studentName,
  studentId,
  gender,
  subjectName,
  subjectMarks,
}: any) {
  type values = {
    newStudentName: string;
    newStudentId: string;
    newGender: string;
    newSubjectName: string;
    newSubjectMarks: number;
  };

  const [editFormData, setEditFormData] = useState({} as values);
  const router = useRouter();
  const handleUpdate = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/student/${_id}`, editFormData);
      alert(res.data.message);
      setEditFormData({} as values);
      router.push("/ourStudents");
    } catch (res) {
      alert(res);
    }
  };
  const handleChange = (e: any) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleUpdate} className="flex flex-col gap-3 mt-10">
        <input
          onChange={handleChange}
          className="px-2 rounded"
          value={editFormData.newStudentId}
          defaultValue={studentId}
          name="newStudentId"
          placeholder="Student ID"
        />
        <input
          onChange={handleChange}
          className="px-2 rounded"
          defaultValue={studentName}
          value={editFormData.newStudentName}
          name="newStudentName"
          placeholder="Student name"
        />
        <input
          onChange={handleChange}
          className="px-2 rounded"
          defaultValue={gender}
          value={editFormData.newGender}
          name="newGender"
          placeholder="gender"
        />
        <div className="flex justify-between">
          <input
            onChange={handleChange}
            className="px-2 rounded"
            defaultValue={subjectName}
            value={editFormData.newSubjectName}
            name="newSubjectName"
            placeholder="Subject name"
          />
          <input
            onChange={handleChange}
            className="px-2 rounded"
            defaultValue={subjectMarks}
            value={editFormData.newSubjectMarks}
            name="newSubjectMarks"
            placeholder="Marks"
          />
        </div>

        <button className="p-2 bg-blue-800 text-white font-bold">Update</button>
      </form>
    </div>
  );
}

export default EditForm;
