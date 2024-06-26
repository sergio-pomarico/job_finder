import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Job from '../../core/job';

const initialState: {
  porpularJobs?: Job[];
  nearJobs: Job[];
  job: Job | undefined;
  searchResults: Job[];
} = {
  porpularJobs: [],
  nearJobs: [],
  job: undefined,
  searchResults: [],
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    getPorpularJobs: (_, __: PayloadAction<string, string>) => {},
    setPorpularJobs: (state, action: PayloadAction<Job[], string>) => {
      state.porpularJobs = action.payload;
    },
    getNearJobs: (_, __: PayloadAction<string, string>) => {},
    setNearJobs: (state, action: PayloadAction<Job[], string>) => {
      state.nearJobs = action.payload;
    },
    getJobDetail: (_, __: PayloadAction<string, string>) => {},
    setJobDetail: (state, payload: PayloadAction<Job, string>) => {
      state.job = payload.payload;
    },
    getSearchTerm: (
      _,
      __: PayloadAction<{page: number; term: string}, string>,
    ) => {},
    setSearchResults: (state, action: PayloadAction<Job[], string>) => {
      state.searchResults = action.payload;
    },
  },
});

export const Actions = jobSlice.actions;
export default jobSlice.reducer;
