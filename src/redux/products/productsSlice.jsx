// features/products/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://127.0.0.1:8000/api/products/';

// Async thunks for API calls
export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const res = await axios.get(URL);
  return res.data;
});

export const fetchSingleProduct = createAsyncThunk('products/fetchSingle', async (id) => {
  const res = await axios.get(`${URL}/${id}`);
  return res.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: true,
    products: [],
    cart: [],
    singleProduct: {},
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((p) => p.id === action.payload);
      const inCart = state.cart.find((p) => p.id === action.payload);

      if (inCart) {
        inCart.qty += 1;
      } else {
        state.cart.push({ ...item, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      });
  },
});

export const { addToCart, removeFromCart } = productsSlice.actions;

export default productsSlice.reducer;
