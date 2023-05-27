import { createSlice, current } from "@reduxjs/toolkit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  userLogin: {},
  userRegister: {},
};

export const notify = (key, text, id) => {
  switch (key) {
    case "success":
      toast.success(text, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;

    case "error":
      toast.error(text, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;

    case "update":
      toast.update(id, {
        render: text,
        type: "success",
        isLoading: false,
        position: "top-right",
      });
      break;
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const id = toast.loading("Vui lòng đợi...");
      setTimeout(() => {
        notify("update", "Đăng nhập thành công", id);
      }, 1000);
      state.userLogin = action.payload;
    },
    registerUser: (state, action) => {
      const id = toast.loading("Vui lòng đợi...");
      setTimeout(() => {
        notify("update", "Đăng ký thành công", id);
      }, 1000);
      state.userRegister = action.payload;
    },
  },
});

export const { loginUser, registerUser } = userSlice.actions;

export default userSlice.reducer;
