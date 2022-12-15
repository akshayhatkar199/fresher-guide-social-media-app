import { createSlice,createAsyncThunk } from  '@reduxjs/toolkit';
import {WithTokenApi} from '../../Helpers/axios'
import jwt_decode from "jwt-decode";
import axios from "axios";


//check user password and username

export const checkLogin = createAsyncThunk(
      'login/checkLogin',
      async (token, thunkApi) => {
		  console.log("token",token)
     	var userInfoData={};
         var decoded = jwt_decode(token);
         console.log("decoded",decoded)
         
		   await axios.get( 
				'http://localhost:8080/users/'+decoded.id,
				{  headers: { Authorization: `Bearer ${token}` }}
				
			  ).then(result => {
				console.log("result",result)
				userInfoData.info = result.data;
			
			})

       
           
			return userInfoData;
		   
	  }
);

const loginSlice = createSlice({ 
          name: 'login',
		  initialState: { userinfo: {}   },
		  reducers: {
		    // standard reducer logic, with auto-generated action types per reducer
		  },
		  extraReducers: (builder) => {
		    // Add reducers for additional action types here, and handle loading state as needed
		    builder.addCase(checkLogin.fulfilled, (state, action) => {
		      // Add user to the state array
		      
		      state.userinfo = action.payload.info;
		    })
		  },
	});


export default loginSlice.reducer