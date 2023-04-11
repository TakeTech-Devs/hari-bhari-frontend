import { configureStore } from '@reduxjs/toolkit'
import { globalApi } from '../features/api/globalApi'

export const store = configureStore({
  reducer: {
  [globalApi.reducerPath]: globalApi.reducer,
},

middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(globalApi.middleware),


  
})