import { createSlice } from "@reduxjs/toolkit";
export interface AuthState {
  isAuth: boolean;
}

export const initialAuthState: AuthState = {
  isAuth: false,
};

export const authanticationSlice = createSlice({
  name: "authSlice",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      localStorage.setItem("logged", "auth");
      if (localStorage.logged === "auth") state.isAuth = true;
    },
    logout(state) {
      localStorage.clear();
      if (!localStorage.getItem("logged")) state.isAuth = false;
    },
  },
});
export const AuthActions = authanticationSlice.actions;