import { createSlice } from "@reduxjs/toolkit";

// create slice

const weaterSlice = createSlice({
     name: 'weather',
     initialState: {
          data: {},
          loading: 'idle',
          error: null
     },
     // reducer
     reducers: {

     }
})

export const {} = weaterSlice

export default weaterSlice.reducer