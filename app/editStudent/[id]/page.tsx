"use client";
import EditForm from "@/components/EditForm";
import axios from "axios";
import React from "react";

const getStudentToEdit = async (id: any) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/student/${id}`);
    return res.data.student;
  } catch (error) {
    alert(error);
  }
};

async function editStudent({ params }: any) {
  const { id } = params;
  const toBeUpdate: any = await getStudentToEdit(id);
  const {
    _id,
    studentName,
    studentId,
    gender,
    subjectName,
    subjectMarks,
    createdAt,
    updatedAt,
    __v,
  } = toBeUpdate;

  return (
    <EditForm
      _id={_id}
      studentId={studentId}
      studentName={studentName}
      gender={gender}
      subjectName={subjectName}
      subjectMarks={subjectMarks}
    />
  );
}

export default editStudent;
