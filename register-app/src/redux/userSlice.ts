import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  objectId: string;
  username: string;
  email: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: { objectId: "", username: "", email: "" },
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.objectId = action.payload.objectId;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.objectId = "";
      state.username = "";
      state.email = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
