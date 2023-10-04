import Link from "next/link";
import "../app/globals.css";

export default function NavigationBar() {
  return (
    <nav className="flex gap-4 justify-between px-3 py-5 bg-gradient-to-br from-gray-800 to-blue-700 text-white">
      <Link className="text-xl" href={"/"}>
        RotaryPortal
      </Link>
      <div>
        <Link className="mr-3" href={"/addStudent"}>
          Add student
        </Link>
        <Link className="mr-3" href={"/ourStudents"}>
          Our students
        </Link>
        <Link href={"/studentRecords"}>Students details</Link>
      </div>
    </nav>
  );
}
