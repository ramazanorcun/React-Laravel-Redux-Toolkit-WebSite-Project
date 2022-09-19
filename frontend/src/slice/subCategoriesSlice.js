import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import subCategoriesService from "../services/subCategoriesService";

const initialState = [];
export const addSubCategories = createAsyncThunk(
  "addSubCategories",
  async (item) => {
    const response = await subCategoriesService.addSubCategories(item);
    console.log(response);
    return response.SubCategories;
  }
);
export const getSubCategories = createAsyncThunk(
  "getSubCategories",
  async () => {
    const response = await subCategoriesService.SubCategories();
    return response.SubCategories;
  }
);

export const updateSubCategories = createAsyncThunk(
  "subCategories/update",
  async ({ name, subCategoryId, categoryId }) => {
    const response = await subCategoriesService.updateSubCategory({
      name,
      subCategoryId,
      categoryId,
    });
    console.log(response);
    return response.SubCategories;
  }
);

const subCategoriesSlice = createSlice({
  name: "SubCategories",
  initialState,
  extraReducers: {
    [getSubCategories.fulfilled]: (state, action) => {
      state.push(...action.payload);
    },
    [addSubCategories.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
    [updateSubCategories.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (subcategory) => subcategory.id === action.payload.id
      );
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
  },
});
const { reducer } = subCategoriesSlice;
export default reducer;
