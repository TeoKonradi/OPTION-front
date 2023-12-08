import { createSlice } from '@reduxjs/toolkit';

const LoginStatusSlice = createSlice({
  name: 'loginStatus',
  initialState: false,
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
