import { RootState } from './index';
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface SiteState {
  siteInformation: Record<string, string>;
}

const generateInitialState = (): SiteState => ({
  siteInformation: {},
});

// ASYNC THUNKS

// REDUCERS
const siteSlice: Slice = createSlice({
  name: 'site',
  initialState: generateInitialState(),
  reducers: {
    setSiteSetting: (
      state: SiteState,
      action: PayloadAction<Record<string, string>>
    ) => {
      state.siteInformation = action.payload;
    },
  },
  extraReducers: (builder: any) => {},
});

// SELECTORS
export const siteInformationSelector = (state: RootState) =>
  state.site.siteInformation;

// EXPORTS
export const siteReducer = siteSlice.reducer;
export const { setSiteSetting } = siteSlice.actions;
