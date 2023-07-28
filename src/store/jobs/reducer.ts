import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Job from '../../core/job';

const initialState: {porpularJobs?: Job[]; nearJobs: Job[]} = {
  porpularJobs: [],
  nearJobs: [],
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
  },
});

export const Actions = jobSlice.actions;
export default jobSlice.reducer;
