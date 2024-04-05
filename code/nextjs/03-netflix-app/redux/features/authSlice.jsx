import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: "",
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.currentUser = payload;
    },
    logoutSuccess: (state) => {
      state.currentUser = "";
    },
    fetchFail: (state) => {
      state.error = true;
    },
  },
});

export const { loginSuccess, logoutSuccess, fetchFail } = authSlice.actions;

export default authSlice.reducer;
