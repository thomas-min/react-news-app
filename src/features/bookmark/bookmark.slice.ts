import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../../app/types';
import localStorage from '../../utils/local-storage.helper';

const STORAGE_KEY = 'bookmark';
const DEFAULT_STATE: BookmarkState = {
  articles: [],
};

interface BookmarkState {
  articles: Article[];
}

const getInitialState = (): BookmarkState => {
  return localStorage.get<BookmarkState>(STORAGE_KEY) || DEFAULT_STATE;
};

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: getInitialState(),
  reducers: {
    addBookmark: (state, action: PayloadAction<Article>) => {
      const { payload } = action;
      const idx = state.articles.findIndex((el) => el.url === payload.url);

      if (~idx) {
        state.articles.splice(idx, 1);
      }
      state.articles.push(payload);

      localStorage.set(STORAGE_KEY, state);
    },
    removeBookmark: (state, action: PayloadAction<Article>) => {
      const { payload } = action;
      const idx = state.articles.findIndex((el) => el.url === payload.url);

      if (~idx) {
        state.articles.splice(idx, 1);
      }

      localStorage.set(STORAGE_KEY, state);
    },
    editBookmark: (state, action: PayloadAction<Article>) => {
      const { payload } = action;
      const idx = state.articles.findIndex(
        (el) => el.url === action.payload.url
      );

      state.articles[idx] = payload;

      localStorage.set(STORAGE_KEY, state);
    },
  },
});

export const { addBookmark, removeBookmark, editBookmark } =
  bookmarkSlice.actions;

export default bookmarkSlice.reducer;
