import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserDetailsStart: (state) => {
      state.loading = true;
    },
    fetchUserDetailsSuccess: (state, action) => {
      state.details = action.payload;
      state.loading = false;
    },
    fetchUserDetailsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchUserDetailsStart,
  fetchUserDetailsSuccess,
  fetchUserDetailsFailure,
} = userSlice.actions;
export default userSlice.reducer;
