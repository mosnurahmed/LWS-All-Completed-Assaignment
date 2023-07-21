import { json } from "react-router-dom";
import { apiSlice } from "../api/apiSlice";
import { checkSearch } from "../filter/filterSlice";

export const tasksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: (project) => {
        if (project !== undefined) {
          let link = project.map((p) => `project_like=${p}`);
          let queryString = `/tasks?${link.join("&")}`;
          return queryString;
        } else {
          return "/tasks";
        }
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const projects = await queryFulfilled;

        dispatch(checkSearch(projects.data));
      },
    }),
    getTask: builder.query({
      query: (name) => `/tasks?name_like=${name}`,
    }),
    addTask: builder.mutation({
      query: ({ taskId, data }) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const task = await queryFulfilled;

        dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            draft.push(task.data);
          })
        );
      },
    }),
    editTask: builder.mutation({
      query: ({ taskId, data }) => ({
        url: `/tasks/${taskId}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const pathResult = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            const itemIndex = draft.findIndex((d) => d.id == arg.taskId);
            if (itemIndex != -1) {
              draft[itemIndex] = {
                ...arg.data,
                id: draft[itemIndex].id,
              };
            }
            return draft;
          })
        );
        try {
          const data = await queryFulfilled;

          dispatch(
            apiSlice.util.updateQueryData("getEditTask", arg.taskId.toString(), (draft) => {
              Object.assign(draft, data.data);
            })
          );
        } catch (err) {
          pathResult.undo();
        }
      },
    }),
    getEditTask: builder.query({
      query: (taskId) => {
        return `/tasks/${taskId}`;
      },
    }),

    deleteTask: builder.mutation({
      query: (taskId) => ({
        url: `/tasks/${taskId}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const pathResult = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            return draft.filter((t) => t.id != arg);
          })
        );

        try {
          await queryFulfilled;
        } catch (err) {
          pathResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useAddTaskMutation,
  useEditTaskMutation,
  useGetEditTaskQuery,
  useDeleteTaskMutation,
} = tasksApi;
