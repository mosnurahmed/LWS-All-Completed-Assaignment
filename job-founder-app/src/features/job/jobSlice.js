import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs, postJobs, updateJobs, deleteJobs } from "./jobApi";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
  edit: {},
};

export const fetchJobs = createAsyncThunk("job/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});
export const createJob = createAsyncThunk("job/createJob", async (data) => {
  const job = await postJobs(data);
  return job;
});
export const changeJob = createAsyncThunk("job/changeJob", async (editedData) => {
  const job = await updateJobs(editedData);
  return job;
});
export const removeJob = createAsyncThunk("job/removeJob", async (id) => {
  await deleteJobs(id);
});
const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    updatedJob: (state, action) => {
      state.edit = action.payload;
    },
    removeUpdateJob: (state) => {
      state.edit = {};
    },
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.jobs = [];
      })

      .addCase(createJob.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      .addCase(changeJob.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(changeJob.fulfilled, (state, action) => {
        state.jobs.map((job) => {
          if (job.id === action.payload.id) {
            job = action.payload;
          }
          return job;
        });
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(changeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      .addCase(removeJob.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        console.log(action);
        state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg);
        state.isLoading = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobSlice.reducer;
export const { updatedJob, removeUpdateJob, } = jobSlice.actions;
