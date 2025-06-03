import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import sidebarReducer from './sidebar/sidebarSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    sidebar: sidebarReducer,
  },
});