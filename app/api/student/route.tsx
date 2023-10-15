import connectMongoDB from "@/lib/mongoDB";
import Student from "@/models/newStudent";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { studentName, studentId, gender, subjectName, subjectMarks } =
    await request.json();
  await connectMongoDB();
  await Student.create({
    studentName,
    studentId,
    gender,
    subjectName,
    subjectMarks,
  });
  return Response.json({ message: "Student Registered" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const ourStudents = await Student.find();
  return Response.json({ ourStudents }, { status: 200 });
}
export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Student.findByIdAndDelete(id);
  return Response.json({ message: "Student deletet" }, { status: 200 });
}
