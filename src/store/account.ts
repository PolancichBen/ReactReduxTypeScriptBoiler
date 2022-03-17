import { RootState } from './index';
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface AccountState {
  profileId: string;
  name: string;
  email: string;
}

const generateInitialState = (): AccountState => ({
  profileId: '',
  name: '',
  email: '',
});

// ASYNC THUNKS

// REDUCERS
const accountSlice: Slice = createSlice({
  name: 'account',
  initialState: generateInitialState(),
  reducers: {
    setEmail: (state: AccountState, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setName: (state: AccountState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setProfileId: (state: AccountState, action: PayloadAction<string>) => {
      state.profileId = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

// SELECTORS
export const profileIdSelector = (state: RootState): string =>
  state.account.profileId;
export const emailSelector = (state: RootState) => state.account.email;
export const usernameSelector = (state: RootState) => state.account.name;

// EXPORTS
export const { setEmail, setName, setProfileId } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
