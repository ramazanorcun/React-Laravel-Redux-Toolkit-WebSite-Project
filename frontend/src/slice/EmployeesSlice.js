import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import employeesService from "../services/employeesService";



const initialState = [];
export const getEmployees = createAsyncThunk(
  "getEmployees",
  async ({email}) => {
    const response = await employeesService.addEmployees(email);
    console.log(response);
    return response;
  }
);
// export const getTmpStore = createAsyncThunk("getTmpStore", async () => {
//   const response = await tmpStoreService.TmpStore();

//   return response.TmpStore;
// });


// export const updateTmpStore = createAsyncThunk(
//   "tmpStore/update",
//   async (id) => {
//     const response = await tmpStoreService.updateTmpStore(id);
//     console.log(response);
//     return response.TmpStore;
//   }
// );

const EmployeesSlice = createSlice({
  name: "Employees",
  initialState,
  extraReducers: {
    [getEmployees.fulfilled]: (state, action) => {
      
      return[...action.payload];
    },
    // [addTmpStore.fulfilled]: (state, action) => {
    //   console.log(action.payload);
    //   state.push (action.payload);
    // },
    // [updateTmpStore.fulfilled]: (state, action) => {
    //   const index = state.findIndex((tmpStore) => tmpStore.id === action.payload.id);
    //   state[index] = {
    //     ...state[index],
    //     ...action.payload,
    //   };
      
    // },
  },
 });
 const { reducer } = EmployeesSlice;
 export default reducer;
