import { createSlice } from '@reduxjs/toolkit';
import blue from '@material-ui/core/colors/blue';

const { actions, reducer } = createSlice({
  name: 'theme',
  initialState: {
    palette: {
      primary: blue,
      type: 'light',
      secondary: {
        main: '#f50057'
      }
    },
    typography: {
      fontFamily: ['Microsoft YaHei', 'Arial', 'Roboto', 'Helvetica', 'sans-serif'].join(',')
    }
  },
  reducers: {
    changeTheme: (state, action) => {
      if (state.palette.type === 'light') {
        state.palette.type = 'dark';
      } else {
        state.palette.type = 'light';
      }
    },
    appBarBackground: (state, action) => {
      state.palette.secondary.main = action.payload;
    }
  }
});

export const { changeTheme, appBarBackground } = actions;
export default reducer;
