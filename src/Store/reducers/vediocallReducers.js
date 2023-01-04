import { createSlice,createAsyncThunk } from  '@reduxjs/toolkit';


//check user password and username

export const SomeOnCall = createAsyncThunk(
      'vediocall/SomeOnCall',
      async (data, thunkApi) => {
		  console.log("SomeOnCall",data)
			return data;
		   
	  }
);
export const setCallingUserName = createAsyncThunk(
	'vediocall/setCallingUserName',
	async (name, thunkApi) => {
		  return name;
		 
	}
);

const vediocallSlice = createSlice({ 
          name: 'vediocall', 
		  initialState: {data:{},callingUserName:""},
		  reducers: {
		    // standard reducer logic, with auto-generated action types per reducer
		  },
		  extraReducers: (builder) => {
		    // Add reducers for additional action types here, and handle loading state as needed
		    builder.addCase(SomeOnCall.fulfilled, (state, action) => {
		      // Add user to the state array
		      state.data = action.payload;
		    })
			.addCase(setCallingUserName.fulfilled, (state, action) => {
				// Add user to the state array
				state.callingUserName = action.payload;
			  })
		  },
	});


export default vediocallSlice.reducer