import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/userSlice";
import countReducer from "./count-slice";

// export const index = () => {};

const store = configureStore({
  reducer: {
    users: usersReducer,
    counter: countReducer,
  },
});

export default store;
