import { createSlice, current, nanoid } from "@reduxjs/toolkit";

type ItemType<T> = T & { id?: number | string; selected: boolean };
type StateType<T> = ItemType<T>[];

const initialState: StateType<{}> = [];

const ItemsListSlice = createSlice({
  initialState,
  name: "itemsList",
  reducers: {
    deleteSelectedItems: (state) => state.filter((item) => !item.selected),
    initializeItems4List: (_, action: { payload: any[] }) => {
      return action.payload.map((item: any) => ({
        ...item,
        id: item.id || item.ID || nanoid(),
        selected: false,
      }));
    },
    resetSelectedItems: (state) => state.forEach((item) => (item.selected = false)),
    toggleItemSelection: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.selected = !item.selected;
      console.log(current(state));
    },
  },
});

export const {
  deleteSelectedItems,
  initializeItems4List,
  resetSelectedItems,
  toggleItemSelection,
} = ItemsListSlice.actions;

export default ItemsListSlice.reducer;
