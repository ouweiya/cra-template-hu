import { configureStore } from '@reduxjs/toolkit';
import one from 'src/models/one';
import theme from 'src/theme/theme';

const store = configureStore({
  preloadedState: {},
  reducer: { one, theme }
});

export default store;
