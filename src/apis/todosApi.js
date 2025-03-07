import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),

    endpoints: (builder) => ({
        getTodo: builder.query({
            query: () => `/todos`,
        }),
        getTodoByID: builder.query({
            query: (todoId) => `/todos/${todoId}`,
        }),
    })
});

export const { useGetTodoQuery, useGetTodoByIDQuery } = todosApi;