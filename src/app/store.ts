import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/search.slice';
import authReducer from '../features/auth/auth.slice';
import bookmarkReducer from '../features/bookmark/bookmark.slice';
import { articleApi } from '../features/search/search.service';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authApi } from '../features/auth/auth.service';

const store = configureStore({
  devTools: true,
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    search: searchReducer,
    auth: authReducer,
    bookmark: bookmarkReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(articleApi.middleware)
      .concat(authApi.middleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
