import { configureStore } from "@reduxjs/toolkit";
import lowerMsgSlice from "./slices/lowerMsg-slice";

export const store = configureStore({
  reducer: {
    lowerMsg: lowerMsgSlice,
  },
});
