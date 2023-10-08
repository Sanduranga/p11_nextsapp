import connectMongoDB from "@/lib/mongoDB";
import Student from "@/models/newStudent";

export async function POST(request: any) {
  const {
    studentId,
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
    studentId,
    studentName,
    subject1Name,
    subject1Marks,
    subject2Name,
    subject2Marks,
    subject3Name,
    subject3Marks,
  });
  return Response.json({ message: "Student Registered" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const ourStudents = await Student.find();
  return Response.json({ ourStudents }, { status: 200 });
}
export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Student.findByIdAndDelete(id);
  return Response.json({ message: "Student deletet" }, { status: 200 });
}
