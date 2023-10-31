import Link from "next/link";
import { useEffect } from "react";
import { HiPencilAlt } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import {
  deleteStudent,
  fetchStudents,
} from "@/redux/features/student/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/Store";
import StudentForm from "./StudentForm";
import Field from "./Field";

export interface ourStd {
  _id: string;
  studentName: string;
  studentId: string;
  gender: string;
  subjectName: string;
  subjectMarks: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function OurStudents() {
  const apiUrl = process.env.API_URL;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudents() as any);
  }, [dispatch]);

  const students = useSelector((state: RootState) => state.student.ourStudents);
  const isLoading = useSelector((state: RootState) => state.student.isLoading);

  const handleDelete = async (_id: string, index: number) => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`/api/student?id=${_id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        // const { message } = await res.json();
        // alert(message);
        dispatch(deleteStudent(index));
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-5">
      <div className="font-bold text-xl p-5">Our Students</div>
      <div
        className={`${
          isLoading
            ? "flex items-center justify-center w-full h-screen"
            : "hidden"
        }`}
      >
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-800">
          <svg
            fill="none"
            className="w-9 h-9 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>

          <div className="text-xl">Loading ...</div>
        </div>
      </div>
      <div
        className={`${
          isLoading ? "hidden" : "block"
        } flex flex-col justify-center w-[80vw] items-center gap-3 `}
      >
        {students.map((ourStudents: ourStd, index) => {
          return (
            <div
              className="flex flex-col justify-start items-center p-3 border-2 border-black shadow-md w-[80vw] rounded-md"
              key={ourStudents?._id}
            >
              <StudentForm>
                <Field>Student name:</Field>
                <Field>: {ourStudents?.studentName}</Field>
              </StudentForm>
              <StudentForm>
                <Field>Student ID:</Field>
                <Field>: {ourStudents?.studentId}</Field>
              </StudentForm>
              <StudentForm>
                <Field>Gender:</Field>
                <Field>: {ourStudents?.gender}</Field>
              </StudentForm>
              <StudentForm>
                <Field>Subject:</Field>
                <Field>: {ourStudents?.subjectName}</Field>
              </StudentForm>
              <StudentForm>
                <Field>Marks</Field>
                <Field>: {ourStudents?.subjectMarks}</Field>
              </StudentForm>

              <div className="flex">
                <h1 className="cursor-pointer">
                  <Link href={`/editStudent/${ourStudents.studentId}`}>
                    <HiPencilAlt size={24} />
                  </Link>
                </h1>

                <h1
                  onClick={() => {
                    handleDelete(ourStudents._id, index);
                  }}
                  className="text-red-700 cursor-pointer"
                >
                  <HiOutlineTrash size={24} />
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
