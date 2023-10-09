"use client";
import axios from "axios";
import { useState } from "react";

export default function StudentDetails() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("kamal");
  const handleClick = async () => {
    const res = await axios.get(`http://localhost:3000/api/student/${value}`);

    const getName = res.data.student.studentName;

    setName(getName);
  };
  console.log(name);
  return (
    <div>
      <input
        className="px-2 py-4"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Enter student's ID"
      />
      <button onClick={handleClick} className="bg-blue-600 px-2 py-4">
        Check
      </button>
      <div>
        <h1>name is: {name}</h1>
      </div>
    </div>
  );
}
