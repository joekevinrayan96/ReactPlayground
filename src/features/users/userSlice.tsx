import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers: any = createAsyncThunk(
  "users/getUsers",
  //   async (dispatch, getState) => {
  async (getState, dispatch) => {
    return await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
  }
);

const usersSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: null as any,
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading...";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default usersSlice.reducer;
