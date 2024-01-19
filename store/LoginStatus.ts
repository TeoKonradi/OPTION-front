import { createSlice } from "@reduxjs/toolkit";

const LoginStatusSlice = createSlice({
  initialState: false,
  name: "loginStatus",
  reducers: {
    setIsLogged: () => {
      return true;
    },
    setIsNotLogged: () => {
      return false;
    },
  },
});

export const { setIsLogged, setIsNotLogged } = LoginStatusSlice.actions;
export default LoginStatusSlice.reducer;
