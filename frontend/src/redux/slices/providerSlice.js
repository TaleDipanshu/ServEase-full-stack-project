import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  providers: [],
  loading: false,
  error: null,
};

const providerSlice = createSlice({
  name: 'provider',
  initialState,
  reducers: {
    fetchProvidersStart: (state) => {
      state.loading = true;
    },
    fetchProvidersSuccess: (state, action) => {
      state.providers = action.payload;
      state.loading = false;
    },
    fetchProvidersFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchProvidersStart,
  fetchProvidersSuccess,
  fetchProvidersFailure,
} = providerSlice.actions;
export default providerSlice.reducer;
