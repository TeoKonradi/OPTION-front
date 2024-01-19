import { createSlice } from "@reduxjs/toolkit";

import { OptionsBarEl } from "../lib/consts";

type OptionsBarState = {
  deletePressed: boolean;
  items: OptionsBarEl[];
};

const PERMANENT_ITEMS: OptionsBarEl[] = [
  {
    title: "Back",
    value: "back",
  },
];

const initialState: OptionsBarState = {
  deletePressed: false,
  items: PERMANENT_ITEMS,
};

const OptionsBarSlice = createSlice({
  initialState,
  name: "optionBar",
  reducers: {
    handleDeletePress: (state) => {
      state.deletePressed = true;
    },
    initializeItemsOptionBar: (state, action) => {
      state.items = [...PERMANENT_ITEMS, ...action.payload];
    },
    resetDeletePress: (state) => {
      state.deletePressed = false;
    },
    resetOptionsBarState: () => {
      return initialState;
    },
  },
});

export const {
  handleDeletePress,
  initializeItemsOptionBar,
  resetDeletePress,
  resetOptionsBarState,
} = OptionsBarSlice.actions;

export default OptionsBarSlice.reducer;
