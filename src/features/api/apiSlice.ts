import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
  endpoints: builder => ({
    getTodos: builder.query<Todo, void>({
      query: () => '/todos'
    })
  })
});

export const { useGetTodosQuery } = apiSlice;
