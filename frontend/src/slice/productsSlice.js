import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsServices from "../services/productService";

const initialState = [];
export const addProduct = createAsyncThunk(
  "addProducts",
  async ( item ) => {
    const response = await productsServices.addProduct( item  );
    return response;
  }
);
export const getProducts = createAsyncThunk("products", async () => {
  const response = await productsServices.Products();
  return response;
});
// export const updateCategories = createAsyncThunk(
//   "categories/update",
//   async ({ id, data }) => {
//     const res = await categoriesServices.update(id, data);
//     return res.data;
//   }
// );
export const deleteProducts = createAsyncThunk(
  "products/delete",
  async ( {productId} ) => {
    await productsServices.deleteProducts({productId});
    return { productId };
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [addProduct.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [getProducts.fulfilled]: (state, action) => {
      return(action.payload);
    },
    // [updateCategories.fulfilled]: (state, action) => {
    //   const index = state.findIndex(tutorial => tutorial.id === action.payload.id);
    //   state[index] = {
    //     ...state[index],
    //     ...action.payload,
    //   };
    // },
    [deleteProducts.fulfilled]: (state, action) => {
      let index = state.findIndex((productId) => productId === action.payload.id);
      state.splice(index,1);
    },
  },
});
const { reducer } = productsSlice;
export default reducer;
