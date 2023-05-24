import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userLogin: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
