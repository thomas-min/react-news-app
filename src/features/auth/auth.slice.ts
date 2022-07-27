import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from './user.type';
import localStorage from '../../utils/local-storage.helper';

const STORAGE_KEY = 'auth';
const DEFAULT_STATE = { user: null, token: null };

interface AuthState {
  user: UserInfo | null;
  token: string | null;
}

const getInitialState = (): AuthState => {
  const state = localStorage.get<AuthState>(STORAGE_KEY);
  return state || DEFAULT_STATE;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: UserInfo; token: string }>
    ) => {
      localStorage.set(STORAGE_KEY, action.payload);
      return { ...state, ...action.payload };
    },
    clearCredentials: () => {
      localStorage.remove(STORAGE_KEY);
      return DEFAULT_STATE;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;
