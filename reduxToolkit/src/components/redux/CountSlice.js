import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset:(state)=>{
      state.count = 0
    }
  },
});

// ✅ correct export
export const { increment, decrement, reset } = counterSlice.actions;

// ✅ correct reducer
export default counterSlice.reduce;