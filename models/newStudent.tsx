import mongoose, { Schema, Document } from "mongoose";

interface IStudent extends Document {
  studentName: string;
  studentId: string;
  gender: string;
  subjectName: string;
  subjectMarks: number;
}

const studentSchema: Schema<IStudent> = new Schema(
  {
    studentName: { type: String, required: true },
    studentId: { type: String, required: true },
    gender: { type: String, required: true },
    subjectName: { type: String },
    subjectMarks: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Student =
  mongoose.models.Student || mongoose.model<IStudent>("Student", studentSchema);

export default Student;
