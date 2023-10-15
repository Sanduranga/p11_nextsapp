import connectMongoDB from "@/lib/mongoDB";
import Student from "@/models/newStudent";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const student = await Student.findOne({ studentId: id });
  return Response.json({ student }, { status: 200 });
}
export async function PUT(request: NextRequest, { params }: any) {
  const { id } = params;
  const {
    newStudentName: studentName,
    newStudentId: studentId,
    newgender: gender,
    newSubjectName: subjectName,
    newSubjectMarks: subjectMarks,
  } = await request.json();
  await connectMongoDB();
  await Student.findByIdAndUpdate(id, {
    studentName,
    studentId,
    gender,
    subjectName,
    subjectMarks,
  });
  return Response.json({ message: "Student updated" }, { status: 200 });
}
