import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: 0,
  userDet: null,
  type: "",
  image: "",
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
    setUserDet: (state, action) => {
      state.userDet = action.payload;
    },
    setUserImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export default UserSlice.reducer;
export const { setUser, setType, setUserDet, setUserImage } = UserSlice.actions;
