"use client";
import EditForm from "@/components/EditForm";
import axios from "axios";
import React from "react";

const getStudentToEdit = async (id: any) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/student/${id}`);
    console.log(res.data.student);
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
    studentId,
    studentName,
    subject1Name,
    subject1Marks,
    subject2Name,
    subject2Marks,
    subject3Name,
    subject3Marks,
    createdAt,
    updatedAt,
    __v,
  } = toBeUpdate;

  return (
    <EditForm
      _id={_id}
      studentId={studentId}
      studentName={studentName}
      subject1Name={subject1Name}
      subject1Marks={subject1Marks}
      subject2Name={subject2Name}
      subject2Marks={subject2Marks}
      subject3Name={subject3Name}
      subject3Marks={subject3Marks}
    />
  );
}

export default editStudent;
