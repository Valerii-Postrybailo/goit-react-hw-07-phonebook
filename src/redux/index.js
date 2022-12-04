import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './operations';

export const store = configureStore({
  reducer: {
    contactsSlice,
  },
});