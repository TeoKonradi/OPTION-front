import { createSlice } from "@reduxjs/toolkit";

const initialState: string | string[] = [];

const FilesSlice = createSlice({
  initialState: initialState,
  name: "files",
  reducers: {
    addFileUrl: (state, action) => {
      return [...state, action.payload];
    },
    removeFileUrl: (state, action) => {
      return state.filter((fileUrl) => fileUrl !== action.payload);
    },
    resetFiles: () => {
      return initialState;
    },
  },
});

export const { addFileUrl, removeFileUrl, resetFiles } = FilesSlice.actions;
export default FilesSlice.reducer;
