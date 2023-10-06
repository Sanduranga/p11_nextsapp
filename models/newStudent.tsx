import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  studentId: string;
  studentName: string;
  subject1Name: string;
  subject1Marks: number;
  subject2Name: string;
  subject2Marks: number;
  subject3Name: string;
  subject3Marks: number;
}

const studentSchema: Schema<IUser> = new Schema(
  {
    studentId: { type: String, required: true },
    studentName: { type: String, required: true },
    subject1Name: { type: String, required: true },
    subject1Marks: { type: Number, required: true },
    subject2Name: { type: String },
    subject2Marks: { type: Number },
    subject3Name: { type: String },
    subject3Marks: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Student =
  mongoose.models.Topic || mongoose.model<IUser>("Topic", studentSchema);

export default Student;
