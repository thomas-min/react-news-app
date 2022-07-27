import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINT, API_KEY } from '../../app/configs/app';
import { ArticleReq, ArticleRes } from './search.type';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINT }),
  endpoints: (builder) => ({
    articles: builder.query<ArticleRes, ArticleReq>({
      query: (params) => {
        const queryParams = new URLSearchParams({
          ...params,
          apiKey: API_KEY,
        }).toString();
        return `everything?${queryParams}`;
      },
    }),
  }),
});
