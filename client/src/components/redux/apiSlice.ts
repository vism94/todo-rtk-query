// src/redux/apiSlice.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TodoType, TodoDataType, ApiResponse } from '../../types/ToDoTypes';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<ApiResponse, void>({
      query: () => '/todos',
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation<TodoType, TodoDataType>({
      query: (newTodo) => ({
        url: '/todos',
        method: 'POST',
        body: newTodo,
      }),
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation<TodoType, { id: number; updatedTodo: TodoDataType }>({
      query: ({ id, updatedTodo }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: updatedTodo,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation<void, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
    toggleTodo: builder.mutation<TodoType, number>({
      query: (id) => ({
        url: `/todos/${id}/toggle`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useToggleTodoMutation,
} = apiSlice;
