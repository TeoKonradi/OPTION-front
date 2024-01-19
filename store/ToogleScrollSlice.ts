import { createSlice } from "@reduxjs/toolkit";

const ScrollSlice = createSlice({
  initialState: false,
  name: "scrollStatus",
  reducers: {
    toggleScrollState(state) {
      return !state;
    },
  },
});

export const { toggleScrollState } = ScrollSlice.actions;
export default ScrollSlice.reducer;
