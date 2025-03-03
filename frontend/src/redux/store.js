import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlices';
import providerReducer from './slices/providerSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    provider: providerReducer,
    user: userReducer,
  },
});

export default store;
