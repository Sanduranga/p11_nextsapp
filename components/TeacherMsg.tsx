"use client";
import { ITeacher } from "@/models/teacherMsg";
import { RootState } from "@/redux/Store";
import { fetchTeacherData } from "@/redux/features/teacher/teacherSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function TeacherMsg() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeacherData() as any);
  }, [dispatch]);
  const teacherMsg = useSelector(
    (state: RootState) => state.teacher.teacherMsg
  ) as [];

  console.log(teacherMsg);

  return (
    <div>
      {teacherMsg.map((item: ITeacher) => {
        return (
          <div className="" key={item._id}>
            <h1 className="mb-3"> this image :{item.videoLink}</h1>
            <Link
              className="px-3 py-2 bg-green-600 font-bold rounded-md"
              href={`/addTeacherMsg/${item._id}`}
            >
              <button>Update</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default TeacherMsg;
