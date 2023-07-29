import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SearchState } from './types';

const initialState: SearchState = {
  search: '',
};

const searchSlices = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state: SearchState, action: PayloadAction<SearchState>) {
      const { search } = action.payload;
      state.search = search;
    },
    resetSearch(state: SearchState) {
      state.search = '';
    },
  },
});

export const { setSearch, resetSearch } = searchSlices.actions;

export default searchSlices.reducer;
