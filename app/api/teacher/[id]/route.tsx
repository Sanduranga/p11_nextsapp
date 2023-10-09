import connectMongoDB from "@/lib/mongoDB";
import Teacher from "@/models/teacherMsg";

export async function PUT(request: any, { params }: any) {
  const { id } = params;
  const {
    updatedVideoLink: videoLink,
    updatedImage1Link: image1Link,
    updatedImage2Link: image2Link,
    updatedMainTopic: mainTopic,
    updatedMainMessage: mainMessage,
    updatedSecondTopic: secondTopic,
    updatedSecondMessage: secondMessage,
  } = await request.json();
  await connectMongoDB();
  await Teacher.findByIdAndUpdate(id, {
    videoLink,
    image1Link,
    image2Link,
    mainTopic,
    mainMessage,
    secondTopic,
    secondMessage,
  });
  return Response.json({ message: "Updated" }, { status: 200 });
}
