import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: 0,
  type: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export default UserSlice.reducer;
export const { setUser, setType } = UserSlice.actions;
