import connectMongoDB from "@/lib/mongoDB";
import Student from "@/models/newStudent";
import { NextResponse } from "next/server";

export async function GET(request: any, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const student = await Student.findOne({ _id: id });
  return NextResponse.json({ student }, { status: 200 });
}
export async function PUT(request: any, { params }: any) {
  const { id } = params;
  const {
    newStudentId: studentId,
    newStudentName: studentName,
    newSubject1Name: subject1Name,
    newSubject1Marks: subject1Marks,
    newSubject2Name: subject2Name,
    newSubject2Marks: subject2Marks,
    newSubject3Name: subject3Name,
    newSubject3Marks: subject3Marks,
  } = await request.json();
  await connectMongoDB();
  const student = await Student.findByIdAndUpdate(id, {
    studentId,
    studentName,
    subject1Name,
    subject1Marks,
    subject2Name,
    subject2Marks,
    subject3Name,
    subject3Marks,
  });
  return NextResponse.json({ message: "Student updated" }, { status: 200 });
}
