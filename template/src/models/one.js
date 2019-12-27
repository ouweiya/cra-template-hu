import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const { actions, reducer } = createSlice({
  name: 'template',
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

export const setOrder = params => dispatch => {};

/*
// 异步操作
export const phoneBook = async projectId => {
  const url = '/mobile/phoneBook';
  const { data } = await axios.get(url, { params: { projectId } });
  return data;
};

export const setContactData = params => async dispatch => {
  const { data } = await phoneBook(params);
  dispatch(setContact(data));
};

(dispatch, getStore)
*/
