import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  isAuthorized: boolean;
};

const initialState: AuthState = {
  isAuthorized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthorized: (state) => {
      state.isAuthorized = true;
    },
    setUnauthorized: (state) => {
      state.isAuthorized = false;
    },
  },
});

export const { setAuthorized, setUnauthorized } = authSlice.actions;
export const authReducer = authSlice.reducer;
