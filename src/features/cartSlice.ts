import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { getCart, addToCart, deleteFromCart, deleteFromCartMulti, clearCart } from "../services/cartService";
import {successMessage} from '../utils/message';
import { ICartState } from '../utils/types';


const initialState: ICartState = {
    status: "idle",
    cartItems: [],
    totalAmount: 0,
    totalQTY: 0,
    error: {},
};



export const getBasket: any = createAsyncThunk("/cart/getCart", async () => {
        const { data } = await getCart();
        return data.data;
});

export const addToBasket: any = createAsyncThunk("/cart/addToCart", async (courseId: string) => {
        const {data, status} = await addToCart(courseId);
            if (status === 201) successMessage("cours was successfully added");
        return data.data;
});


export const deleteFromBasket: any = createAsyncThunk("/cart/deleteFromCart", async (courseId: string) => {
        const { data } = await deleteFromCart(courseId);
        return data.data;
});


export const deleteFromBasketMulti: any = createAsyncThunk("/cart/deleteFromCartMulti", async (courseId: string) => {
        const { data, status } = await deleteFromCartMulti(courseId);
            if (status === 201) successMessage("cours was successfully deleted");
        return data.data;
});


export const clearBasket: any = createAsyncThunk("/cart/clearCart", async () => {
        const {data, status} = await clearCart();
            if (status === 201) successMessage("Basket was successfully deleted");
});



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getBasket.pending, (state) => {
          state.status = "loading";
        })
        .addCase(getBasket.fulfilled, (state, action) => {
          state.status= "completed";
          state.cartItems =  [...action.payload.cartItems];
          state.totalAmount = action.payload.totalAmount;
          state.totalQTY = action.payload.totalQTY;
        })
        .addCase(getBasket.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
        .addCase(addToBasket.pending, (state) => {
          state.status = "loading";
        })
        .addCase(addToBasket.fulfilled, (state, action) => {
            state.status= "completed";
            state.cartItems =  [...action.payload.cartItems];
            state.totalAmount = action.payload.totalAmount;
            state.totalQTY = action.payload.totalQTY;
        })
        .addCase(addToBasket.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
        .addCase(deleteFromBasket.pending, (state) => {
          state.status = "loading";
        })
        .addCase(deleteFromBasket.fulfilled, (state, action) => {
            state.status= "completed";
            state.cartItems =  [...action.payload.cartItems];
            state.totalAmount = action.payload.totalAmount;
            state.totalQTY = action.payload.totalQTY;
        })
        .addCase(deleteFromBasket.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;   
        })
        .addCase(deleteFromBasketMulti.pending, (state) => { 
          state.status = "loading";
        })
        .addCase(deleteFromBasketMulti.fulfilled, (state, action) => {
            state.status= "completed";
            state.cartItems =  [...action.payload.cartItems];
            state.totalAmount = action.payload.totalAmount;
            state.totalQTY = action.payload.totalQTY;
        })
        .addCase(deleteFromBasketMulti.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
        .addCase(clearBasket.pending, (state) => { 
            state.status = "loading";
        })
        .addCase(clearBasket.fulfilled, (state, action) => {
           state.status= "completed";
           state.cartItems = [];
           state.totalAmount = 0;
           state.totalQTY = 0;
        })
        .addCase(clearBasket.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
  }});
  
  export default cartSlice.reducer