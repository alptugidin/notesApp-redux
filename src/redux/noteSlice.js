import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAsyncNotes = createAsyncThunk('notes/getAsyncNotes', async () => {
  const response = await axios.get('/api/notes');
  return response.data;
});

export const addAsyncNotes = createAsyncThunk('notes/addAsyncNotes', async ({ value, activeColor }) => {
  const data = { value, activeColor };
  const response = await axios.post('/api/add', data);
  return response.data;
});

export const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [],
  },

  extraReducers: {
    [getAsyncNotes.fulfilled]: (state, action) => {
	  state.items = action.payload;
    },

    [addAsyncNotes.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export default noteSlice.reducer;
