import Link from "next/link";
import { useEffect, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ourStd {
  _id: string;
  studentId: number;
  studentName: string;
  subject1Name: string;
  subject1Marks: number;
  subject2Name: string;
  subject2Marks: number;
  subject3Name: string;
  subject3Marks: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function OurStudents() {
  const [students, setStudent] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/student")
      .then((res) => {
        setStudent(res.data.ourStudents);
      })
      .catch((err) => {
        alert(err);
      });
  }, [router]);

  const handleDelete = async (_id: string) => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await axios
        .delete(`http://localhost:3000/api/student?id=${_id}`)
        .then((res) => alert(res.data.message))
        .catch((error) => {
          alert(error);
        });
      router.refresh();
    }
  };

  return (
    <div>
      {students.map((ourStudents: ourStd) => {
        return (
          <div
            className="flex flex-col justify-center items-center p-3 border-2 border-black shadow-md w-auto"
            key={ourStudents?._id}
          >
            <div>Student ID:{ourStudents?.studentId}</div>
            <h1>Student name:{ourStudents?.studentName}</h1>
            <h1>
              Subject:
              {ourStudents?.subject1Name} {""} Marks:
              {ourStudents?.subject1Marks}
            </h1>
            <h1>
              Subject:
              {ourStudents?.subject2Name} {""} Marks:
              {ourStudents?.subject2Marks}
            </h1>
            <h1>
              Subject:
              {ourStudents?.subject3Name} {""} Marks:
              {ourStudents?.subject3Marks}
            </h1>
            <div className="flex">
              <Link href={`/editStudent/${ourStudents._id}`}>
                <HiPencilAlt size={24} />
              </Link>{" "}
              <h1
                onClick={() => {
                  handleDelete(ourStudents._id);
                }}
                className="text-red-700"
              >
                <HiOutlineTrash size={24} />
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
