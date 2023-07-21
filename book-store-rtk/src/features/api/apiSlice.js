import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes:["books","book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags:["books"]
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags:(result,error,arg) =>[{type:"book",id:arg}]
    }),
    addBook: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/books",
        body: data,
      }),
      invalidatesTags:["books"]
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        method: "PATCH",
        url: `/books/${id}`,
        body: data,
      }),
      invalidatesTags:(result,error,arg) =>["books",{
        type:"book", id:arg.id
      }]
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/books/${id}`,
      }),
      invalidatesTags:["books"]
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation, useEditBookMutation, useDeleteBookMutation, useGetBookQuery } =
  apiSlice;
