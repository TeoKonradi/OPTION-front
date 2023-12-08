import { createSlice } from "@reduxjs/toolkit";

const ScrollSlice = createSlice({
  name: "scrollStatus",
  initialState: false,
  reducers: {
    toggleScrollState(state) {
      return !state;
    },
  },
});

export const { toggleScrollState } = ScrollSlice.actions;
export default ScrollSlice.reducer;
