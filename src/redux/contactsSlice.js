
import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items ',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;