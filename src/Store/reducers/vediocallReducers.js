import { createSlice,createAsyncThunk } from  '@reduxjs/toolkit';


//check user password and username

export const SomeOnCall = createAsyncThunk(
      'vediocall/SomeOnCall',
      async (data, thunkApi) => {
		  console.log("SomeOnCall",data)
			return data;
		   
	  }
);

const vediocallSlice = createSlice({ 
          name: 'vediocall', 
		  initialState: {data:{}},
		  reducers: {
		    // standard reducer logic, with auto-generated action types per reducer
		  },
		  extraReducers: (builder) => {
		    // Add reducers for additional action types here, and handle loading state as needed
		    builder.addCase(SomeOnCall.fulfilled, (state, action) => {
		      // Add user to the state array
		      
		      state.data = action.payload;
		    })
		  },
	});


export default vediocallSlice.reducer