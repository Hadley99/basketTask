import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
//createSlice == reduceer

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    let products = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: { allProducts: null, loading: false, error: false },

  extraReducers: {
    [getAllProducts.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.allProducts = [...action.payload];
    },
    [getAllProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = "An Error Occured";
    },
  },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
