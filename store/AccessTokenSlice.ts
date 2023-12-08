import { createSlice } from "@reduxjs/toolkit";

const AccessSlice = createSlice({
  name: "AccessToken",
  initialState: false,
  reducers: {
    setAccessToken: (action: any) => {
      return action.payload;
    },
  },
});

export const { setAccessToken } = AccessSlice.actions;
export default AccessSlice.reducer;
