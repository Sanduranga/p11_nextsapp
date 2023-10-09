import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./features/student/studentSlice";
import teacherSlice from "./features/teacher/teacherSlice";

const store = configureStore({
  reducer: {
    student: studentSlice,
    teacher: teacherSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
