import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: false,
  name: "lowerMsgSlice",

  reducers: {
    setVisibility: (state, action) => {
      return state = action.payload
    },
  },
});

export const { setVisibility } = cartSlice.actions;
export default cartSlice.reducer;
