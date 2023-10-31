"use client";
import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/Store";
import Image from "next/image";
import { ourStd } from "./OurStudents";
import { fetchStudents } from "@/redux/features/student/studentSlice";

interface studentType {
  children: ReactNode;
}

function Student({ children }: studentType) {
  return (
    <div className="w-36 h-36 rounded-full overflow-hidden bg-red-400 flex justify-center items-center">
      {children}
    </div>
  );
}

function BestStudents() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudents() as any);
  }, [dispatch]);

  const topStudents = useSelector(
    (state: RootState) => state.student.ourStudents
  );
  let students = [...topStudents];
  students.sort((a: ourStd, b: ourStd) => b.subjectMarks - a.subjectMarks);

  const mappingStudent = () => {
    const ab = students.map((student: ourStd) => {
      return (
        <div key={student._id}>
          <Student>
            <Image
              src={"/three.jpg"}
              alt="topStu"
              height={100}
              width={100}
              objectFit="cover"
            />
          </Student>
          <h1 className="font-bold text-center">{student.studentName}</h1>
        </div>
      );
    });
    return ab;
  };

  return (
    <div className="w-full h-auto bg-yellow-300 p-3">
      <h1 className="font-bold text-center text-2xl mb-5 font-mono">
        Our top students
      </h1>
      <div className="flex flex-wrap gap-3">
        {mappingStudent() as ReactNode}
      </div>
    </div>
  );
}

export default BestStudents;
