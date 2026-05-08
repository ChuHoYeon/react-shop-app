import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  email: string | null;
  token: string;
  id: string;
};

const savedUser = localStorage.getItem("user");

const initialState: UserState = savedUser
  ? JSON.parse(savedUser)
  : { email: "", token: "", id: "" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;

      localStorage.setItem("user", JSON.stringify(state));
    },
    removeUser: (state) => {
      state.email = "";
      state.token = "";
      state.id = "";

      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
