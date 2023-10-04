import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
export default function OurStudents() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-3 border-2 border-black shadow-md w-auto">
        <h1>Student name: Sanduranga</h1>
        <h1>Subject1 marks: marks1</h1>
        <h1>Subject2 marks: marks2</h1>
        <h1>Subject3 marks: marks3</h1>
        <div className="flex">
          <Link href={"/editStudent/12"}>
            <HiPencilAlt size={24} />
          </Link>
          <div className="text-red-700">
            <HiOutlineTrash size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
