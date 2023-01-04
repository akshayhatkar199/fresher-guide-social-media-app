import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./reducers/userReducer";
import vediocallReducer from "./reducers/vediocallReducers"


export const store = configureStore({
    reducer: {
       
        userData:userReducer,
        videocallCome:vediocallReducer
        
    }
  })

 export default store;
