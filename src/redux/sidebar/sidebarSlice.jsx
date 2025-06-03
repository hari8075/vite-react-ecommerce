import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    sideCartOpen: false,
    sidebarOpen: false,
  },
  reducers: {
    openSideCart: (state) => {
      state.sideCartOpen = true;
    },
    closeSideCart: (state) => {
      state.sideCartOpen = false;
    },
    toggleSideCart: (state) => {
      state.sideCartOpen = !state.sideCartOpen;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },
  },
});

export const {
  openSideCart,
  closeSideCart,
  toggleSideCart,
  toggleSidebar,
  closeSidebar,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
