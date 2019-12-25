import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const { actions, reducer } = createSlice({
  name: 'one',
  initialState: {
    count: 0
  },
  reducers: {
    increasing: (state, action) => {
      return state + action.payload;
    }
  }
});

export const { increasing } = actions;
export default reducer;
