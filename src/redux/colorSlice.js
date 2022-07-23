import { createSlice } from '@reduxjs/toolkit';

const colorArray = [
  { name: 'blue', color: 'bg-blue-100' },
  { name: 'red', color: 'bg-red-100' },
  { name: 'green', color: 'bg-green-100' },
  { name: 'orange', color: 'bg-orange-100' },
  { name: 'purple', color: 'bg-purple-100' },
  { name: 'yellow', color: 'bg-yellow-100' },
  { name: 'white', color: 'bg-white' },
];

export const colorSlice = createSlice({
  name: 'color',
  initialState: {
    value: 'white',
    border: '',
    activeColor: '',
    textColors: [
      { name: 'blue', color: 'text-blue-800' },
      { name: 'red', color: 'text-red-800' },
      { name: 'green', color: 'text-green-800' },
      { name: 'orange', color: 'text-orange-800' },
      { name: 'purple', color: 'text-purple-800' },
      { name: 'yellow', color: 'text-yellow-800' },
    ],
    bgColors: [
      { name: 'blue', color: 'bg-blue-200' },
      { name: 'red', color: 'bg-red-200' },
      { name: 'green', color: 'bg-green-200' },
      { name: 'orange', color: 'bg-orange-200' },
      { name: 'purple', color: 'bg-purple-200' },
      { name: 'yellow', color: 'bg-yellow-200' },
      { name: 'white', color: 'bg-gray-200' },
    ],

  },
  reducers: {
    changeColor: (state, action) => {
      state.value = colorArray.find((item) => item.name === action.payload).color;
      state.activeColor = action.payload;
    },

  },

});

export const { changeColor, randomColor } = colorSlice.actions;
export default colorSlice.reducer;
