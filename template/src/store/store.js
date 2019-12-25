import { configureStore } from '@reduxjs/toolkit';
import one from 'src/models/one';

const store = configureStore({
  preloadedState: {},
  reducer: { one }
});

export default store;
