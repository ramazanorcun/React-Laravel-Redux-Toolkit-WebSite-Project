 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tmpStoreService from "../services/tmpStoreService";



const initialState = [];
export const addTmpStore = createAsyncThunk(
  "addTmpStore",
  async (item) => {
    const response = await tmpStoreService.addTmpStore(item);
    console.log(response);
    return response;
  }
);
export const getTmpStore = createAsyncThunk("getTmpStore", async () => {
  const response = await tmpStoreService.TmpStore();

  return response.TmpStore;
});


export const updateTmpStore = createAsyncThunk(
  "tmpStore/update",
  async (id) => {
    const response = await tmpStoreService.updateTmpStore(id);
    console.log(response);
    return response.TmpStore;
  }
);

const TmpStoreSlice = createSlice({
  name: "tmpStore",
  initialState,
  extraReducers: {
    [getTmpStore.fulfilled]: (state, action) => {
      
      state.push(...action.payload);
    },
    [addTmpStore.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.push (action.payload);
    },
    [updateTmpStore.fulfilled]: (state, action) => {
      const index = state.findIndex((tmpStore) => tmpStore.id === action.payload.id);
      state[index] = {
       
        ...state[index,1],
       
        ...action.payload,
        
      };
      console.log(index);
    },
  },
 });
 const { reducer } = TmpStoreSlice;
 export default reducer;
