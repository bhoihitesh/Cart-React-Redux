import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const cartAPI = createAsyncThunk('getData', async () => {
    const response = await axios.get('http://localhost:2000/products');
    const res = await response.data;
    return res;
});

export const cartSlice = createSlice({
    name: 'cartdata',
    initialState: {
        cart: [],
        loading: null,
        error: '',
    },
    extraReducers: {
        [cartAPI.pending]: (state, action) => {
            state.loading = true;
        },
        [cartAPI.fulfilled]: (state, action) => {
            state.loading = false;
            state.cart = [action.payload];
        },
        [cartAPI.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default cartSlice.reducer;