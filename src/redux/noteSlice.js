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

export const updateAsyncNotes = createAsyncThunk('notes/updateAsyncNotes', async ({ id, status }) => {
  const data = { id, status };
  const response = await axios.put('/api/update', data);
  return response.data;
});

export const deleteAsyncNotes = createAsyncThunk('notes/deleteAsyncNotes', async ({ id }) => {
  const response = await axios.delete(`/api/delete/${id}`);
  return response.data;
});

export const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [],
    isLoading: false,
  },

  extraReducers: {
    [getAsyncNotes.pending]: (state) => {
      state.isLoading = true;
    },

    [getAsyncNotes.fulfilled]: (state, action) => {
	  state.items = action.payload;
      state.isLoading = false;
    },

    [addAsyncNotes.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },

    [updateAsyncNotes.fulfilled]: (state, action) => {
      state.items = action.payload;
    },

    [deleteAsyncNotes.fulfilled]: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export default noteSlice.reducer;
