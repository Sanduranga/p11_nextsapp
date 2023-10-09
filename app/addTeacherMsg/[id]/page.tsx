"use client";

import { ITeacher } from "@/models/teacherMsg";
import { RootState } from "@/redux/Store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function UpdateteacherMsg({ params }: any) {
  const { id } = params;
  const [updatedData, setUpdateddata] = useState<any>();
  const teacherData = useSelector(
    (state: RootState) => state.teacher.teacherMsg
  ) as any;
  const data = teacherData[0];
  console.log(id);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/api/teacher/${id}`, {
      method: "PUT",
      headers: {
        "cpntent-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
  };
  const handleChange = (e: any) => {
    setUpdateddata({ ...updatedData, [e.target.name]: e.target.value });
  };
  console.log(updatedData);

  return (
    <div>
      <form className="flex flex-col gap-3 p-5" onSubmit={handleUpdate}>
        <input
          onChange={handleChange}
          defaultValue={data.videoLink}
          name="updatedVideoLink"
          className="px-3 rounded-sm"
          placeholder="videoLink"
        />
        <input
          onChange={handleChange}
          defaultValue={data.image1Link}
          name="updatedImage1Link"
          className="px-3 rounded-sm"
          placeholder="image1Link"
        />
        <input
          onChange={handleChange}
          defaultValue={data.image2Link}
          name="updatedImage2Link"
          className="px-3 rounded-sm"
          placeholder="image2Link"
        />
        <input
          onChange={handleChange}
          defaultValue={data.mainTopic}
          name="updatedMainTopic"
          className="px-3 rounded-sm"
          placeholder="mainTopic"
        />
        <input
          onChange={handleChange}
          defaultValue={data.mainMessage}
          name="updatedMainMessage"
          className="px-3 rounded-sm"
          placeholder="mainMessage"
        />
        <input
          onChange={handleChange}
          defaultValue={data.secondTopic}
          name="updatedSecondTopic"
          className="px-3 rounded-sm"
          placeholder="secondTopic"
        />
        <input
          onChange={handleChange}
          defaultValue={data.secondMessage}
          name="updatedSecondMessage"
          className="px-3 rounded-sm"
          placeholder="secondMessage"
        />
        <button className="px-3 py-2 bg-green-600 font-bold">Update</button>
      </form>
    </div>
  );
}

export default UpdateteacherMsg;
