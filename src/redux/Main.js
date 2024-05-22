import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";

export const MainStore = configureStore({
  reducer: {
    user: UserSlice,
  },
});
