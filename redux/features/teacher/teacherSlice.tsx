import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchTeacherData = createAsyncThunk(
  "teacher/fetchTeacherMsg",
  async () => {
    const res = await fetch("/api/teacher", {
      cache: "no-store",
    });
    const { teacherMsg } = await res.json();
    return teacherMsg;
  }
);

type iniState = {
  isLoading: boolean;
  teacherMsg: [];
  error: null | string;
};

const initialState = {
  isLoading: false,
  teacherMsg: [],
  error: null,
} as iniState;

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchTeacherData.pending,
      (state, action: PayloadAction<any>) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      fetchTeacherData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.teacherMsg = action.payload;
      }
    );
    builder.addCase(fetchTeacherData.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default teacherSlice.reducer;
