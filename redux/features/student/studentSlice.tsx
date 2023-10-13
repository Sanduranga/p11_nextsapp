import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk(
  "student/fetchStudents",
  async () => {
    const res = await fetch("/api/student", {
      cache: "no-store",
    });
    const { ourStudents } = await res.json();
    return ourStudents;
  }
);

type iniState = {
  ourStudents: [];
  isLoading: boolean;
  error: null | string;
};
const initialState = {
  ourStudents: [],
  isLoading: false,
  error: null,
} as iniState;

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchStudents.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(
        fetchStudents.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.ourStudents = action.payload;
        }
      ),
      builder.addCase(fetchStudents.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default studentSlice.reducer;
