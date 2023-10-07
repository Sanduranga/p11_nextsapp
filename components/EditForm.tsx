"use client";
import axios from "axios";
import React, { useState } from "react";

function EditForm({
  _id,
  studentId,
  studentName,
  subject1Name,
  subject1Marks,
  subject2Name,
  subject2Marks,
  subject3Name,
  subject3Marks,
}: any) {
  // _id;
  // studentId;
  // studentName;
  // subject1Name;
  // subject1Marks;
  // subject2Name;
  // subject2Marks;
  // subject3Name;
  // subject3Marks;

  const [editFormData, setEditFormData] = useState({});
  const handleInputs = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3000/api/student/${_id}`,
        editFormData
      );
      alert(res.data.message);
    } catch (res) {
      alert(res);
    }
  };
  const handleChange = (e: any) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleInputs} className="flex flex-col gap-3 mt-10">
        <input
          onChange={handleChange}
          className="px-2 rounded"
          placeholder={studentId}
          name="newStudentId"
        />
        <input
          onChange={handleChange}
          className="px-2 rounded"
          placeholder={studentName}
          name="newStudentName"
        />
        <div className="flex justify-between">
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder={subject1Name}
            name="newSubject1Name"
          />
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder={subject1Marks}
            name="newSubject1Marks"
          />
        </div>
        <div className="flex justify-between">
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder={subject2Name}
            name="newSubject2Name"
          />
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder={subject2Marks}
            name="newSubject2Marks"
          />
        </div>
        <div className="flex justify-between">
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder={subject3Name}
            name="newSubject3Name"
          />
          <input
            onChange={handleChange}
            className="px-2 rounded"
            placeholder={subject3Marks}
            name="newSubject3Marks"
          />
        </div>
        <button className="p-2 bg-blue-800 text-white font-bold">Update</button>
      </form>
    </div>
  );
}

export default EditForm;
