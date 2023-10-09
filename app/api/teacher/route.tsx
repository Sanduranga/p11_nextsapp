import connectMongoDB from "@/lib/mongoDB";
import Teacher from "@/models/teacherMsg";

export async function POST(request: any) {
  const {
    videoLink,
    image1Link,
    image2Link,
    mainTopic,
    mainMessage,
    secondTopic,
    secondMessage,
  } = await request.json();
  await connectMongoDB();
  await Teacher.create({
    videoLink,
    image1Link,
    image2Link,
    mainTopic,
    mainMessage,
    secondTopic,
    secondMessage,
  });
  return Response.json(
    { message: "Techer's data Registered" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const teacherMsg = await Teacher.find();
  return Response.json({ teacherMsg }, { status: 200 });
}
