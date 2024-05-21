import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: null,
}

export const useSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    logeinfo: (state,action) => {
     
      state.userInfo = action.payload
    },
   
  },
})


export const { logeinfo } = useSlice.actions

export default useSlice.reducer