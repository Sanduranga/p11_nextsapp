import mongoose, { Document, Schema } from "mongoose";

export interface ITeacher extends Document {
  videoLink: string;
  image1Link: string;
  image2Link: string;
  mainTopic: string;
  mainMessage: string;
  secondTopic: string;
  secondMessage: string;
}

const teacherSchema: Schema<ITeacher> = new Schema(
  {
    videoLink: { type: String },
    image1Link: { type: String },
    image2Link: { type: String },
    mainTopic: { type: String },
    mainMessage: { type: String },
    secondTopic: { type: String },
    secondMessage: { type: String },
  },
  {
    timestamps: true,
  }
);

const Teacher =
  mongoose.models.Teacher || mongoose.model<ITeacher>("Teacher", teacherSchema);

export default Teacher;
