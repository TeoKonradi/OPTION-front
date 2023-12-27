import { createSlice } from "@reduxjs/toolkit";
import { OptionsBarEl } from "../lib/consts";

type OptionsBarState = {
  items: OptionsBarEl[];
  deletePressed: boolean;
};

const PERMANENT_ITEMS: OptionsBarEl[] = [
  {
    title: "Back",
    value: "back",
  },
];

const initialState: OptionsBarState = {
  items: PERMANENT_ITEMS,
  deletePressed: false,
};

const OptionsBarSlice = createSlice({
  name: "optionBar",
  initialState,
  reducers: {
    initializeItemsOptionBar: (state, action) => {
      state.items = [...PERMANENT_ITEMS, ...action.payload];
    },
    resetOptionsBarState: () => {
      return initialState;
    },
    handleDeletePress: (state) => {
      state.deletePressed = true;
    },
    resetDeletePress: (state) => {
      state.deletePressed = false;
    },
  },
});

export const {
  initializeItemsOptionBar,
  handleDeletePress,
  resetDeletePress,
  resetOptionsBarState,
} = OptionsBarSlice.actions;

export default OptionsBarSlice.reducer;
