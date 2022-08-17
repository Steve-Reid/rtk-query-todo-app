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
    }),
    addTodo: builder.mutation<Todo, void>({
      query: todo => ({
        url: '/todos',
        method: 'POST',
        body: todo
      })
    }),
    updateTodo: builder.mutation<Todo, Todo>({
      query: todo => ({
        url: `/todos/${todo.id}`,
        method: 'PATCH',
        body: todo
      })
    }),
    deleteTodo: builder.mutation<void, Todo>({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
        body: id
      })
    })
  })
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation
} = apiSlice;
