import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoriesServices from "../services/categoriesServices";

const initialState = [];

export const addCategories = createAsyncThunk(
  "addcategories",
  async (item) => {
    const response = await categoriesServices.addCategories(item);
    return response;
  }
);

export const getCategories = createAsyncThunk("getcategories", async () => {
  const response = await categoriesServices.categories();
  return response;
});

export const updateCategories = createAsyncThunk(
  "categories/update",
  async ({categoryId,name}) => {
    const response = await categoriesServices.updateCategory({categoryId,name});
    console.log(response);
    return response;
  }
);

export const deleteCategories = createAsyncThunk(
  "categories/delete",
  async ( categoryId ) => {
    await categoriesServices.deleteCategory(categoryId );
    return { categoryId };
  }
);

const categoriesSlice = createSlice({
  name: "MainCategories",
  initialState,
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
     return [...action.payload];
    
    },

    [addCategories.fulfilled]: (state, action) => {
      state.push(action.payload);
    },

    [updateCategories.fulfilled]: (state, action) => {
      const index = state.findIndex(categoryId => categoryId === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },

    [deleteCategories.fulfilled]: (state, action) => {
      let index = state.findIndex((category) => category.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});
const { reducer } = categoriesSlice;
export default reducer;
