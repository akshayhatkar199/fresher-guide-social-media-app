import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./reducers/userReducer";



export const store = configureStore({
    reducer: {
       
        userData:userReducer,
        
    }
  })

 export default store;
