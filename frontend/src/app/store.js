import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slice/authSlice'
import categoriesReducer from '../slice/categoriesSlice'
import subCategoriesReducer from '../slice/subCategoriesSlice'
import productsReducer from '../slice/productsSlice'
import tmpStoreReducer from '../slice/tmpStoreSlice'
import employeesReducer from '../slice/EmployeesSlice'



 
const reducer = {
  auth: authReducer,
  categories:categoriesReducer,
  subCategories:subCategoriesReducer,
  products:productsReducer,
  tmpStore:tmpStoreReducer,
  employees:employeesReducer,
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;