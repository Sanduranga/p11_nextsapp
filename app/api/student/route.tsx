import connectMongoDB from "@/lib/mongoDB";
import Student from "@/models/newStudent";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const {
    id,
    studentName,
    subject1Name,
    subject1Marks,
    subject2Name,
    subject2Marks,
    subject3Name,
    subject3Marks,
  } = await request.json();
  await connectMongoDB();
  await Student.create({
    id,
    studentName,
    subject1Name,
    subject1Marks,
    subject2Name,
    subject2Marks,
    subject3Name,
    subject3Marks,
  });
  return NextResponse.json({ message: "Student Registered" }, { status: 201 });
}
