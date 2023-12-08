import { createSlice, current, nanoid } from '@reduxjs/toolkit';

type ItemType<T> = T & { selected: boolean; id?: string | number };
type StateType<T> = ItemType<T>[];

const initialState: StateType<{}> = [];

const ItemsListSlice = createSlice({
  name: 'itemsList',
  initialState,
  reducers: {
    initializeItems4List: (_, action: { payload: any[] }) => {
      return action.payload.map((item: any) => ({
        ...item,
        id: item.id || item.ID || nanoid(),
        selected: false,
      }));
    },
    toggleItemSelection: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.selected = !item.selected;
      console.log(current(state));
    },
    deleteSelectedItems: (state) => state.filter((item) => !item.selected),
    resetSelectedItems: (state) =>
      state.forEach((item) => (item.selected = false)),
  },
});

export const {
  initializeItems4List,
  toggleItemSelection,
  deleteSelectedItems,
  resetSelectedItems,
} = ItemsListSlice.actions;

export default ItemsListSlice.reducer;
