import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortBy } from './search.type';

interface SearchState {
  query: string;
  sortBy: SortBy;
}

const initialState: SearchState = {
  query: '',
  sortBy: SortBy.Popularity,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSortBy: (state, action: PayloadAction<SortBy>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setQuery, setSortBy } = searchSlice.actions;

export default searchSlice.reducer;
