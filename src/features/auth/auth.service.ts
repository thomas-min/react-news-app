import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MOCK_SERVER } from '../../app/configs/app';
import { LoginReq, LoginRes } from './user.type';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: MOCK_SERVER }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginRes, LoginReq>({
      query: (data) => {
        return {
          url: 'login',
          method: 'post',
          body: data,
          headers: {
            'Content-type': 'application/json; charset=utf-8',
          },
        };
      },
    }),
  }),
});
