import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    countReducer(state) {
      state.count = state.count + 1;
    },
  },
});

export const countAction = countSlice.actions;

export default countSlice.reducer;
