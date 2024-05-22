import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: 0,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default UserSlice.reducer;
export const { setUser } = UserSlice.actions;
