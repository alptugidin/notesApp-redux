import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './colorSlice';
import noteReducer from './noteSlice';

export const store = configureStore({
  reducer: {
    color: colorReducer,
    note: noteReducer,
  },
});
