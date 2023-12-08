import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductSize } from "../{ lib }/( api )";

interface Size {
  sizes: ProductSize[];
}

const SizesSlice = createSlice({
  name: "Sizes",
  initialState: {
    sizes: [{ size: "", available_now: 0 }],
  } as Size,
  reducers: {
    addSize: (state) => {
      state.sizes.push({ size: "", available_now: 0 });
    },
    removeSize: (state, action: PayloadAction<number>) => {
      state.sizes.splice(action.payload, 1);
    },
    updateSize: (
      state,
      action: PayloadAction<{
        index: number;
        name: keyof ProductSize;
        value: string | number;
      }>
    ) => {
      const { index, name, value } = action.payload;
      if (name === "size") {
        state.sizes[index][name] = value as string;
      } else if (name === "available_now") {
        state.sizes[index][name] = value as number;
      }
    },
  },
});

export const { addSize, removeSize, updateSize } = SizesSlice.actions;

export default SizesSlice.reducer;
