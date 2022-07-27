import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './app/configs';
import LoginPage from './routes/login.page';
import BookmarkPage from './routes/bookmark.page';
import RequireAuth from './app/components/require-auth';
import HomePage from './routes/home.page';
import SearchPage from './routes/search.page';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.SEARCH} element={<SearchPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route
            path={ROUTES.BOOKMARK}
            element={
              <RequireAuth>
                <BookmarkPage />
              </RequireAuth>
            }
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
