import { createSlice } from "@reduxjs/toolkit";

const AccessSlice = createSlice({
  initialState: false,
  name: "AccessToken",
  reducers: {
    setAccessToken: (action: any) => {
      return action.payload;
    },
  },
});

export const { setAccessToken } = AccessSlice.actions;
export default AccessSlice.reducer;
