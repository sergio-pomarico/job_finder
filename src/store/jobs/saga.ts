import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import Services from '../../api/api';
import Job from '../../core/job';
import {setNearJobs, setPorpularJobs} from './';

export function* findPopularJobs(action: PayloadAction<string, string>) {
  const query = action.payload;
  try {
    const jobs: Job[] = yield call(Services.search, query);
    yield put(setPorpularJobs(jobs));
  } catch (error) {
    // if (error instanceof AxiosError) {
    console.log(error);
    //}
  }
}

export function* findNearJobs(action: PayloadAction<string, string>) {
  const query = action.payload;
  try {
    const jobs: Job[] = yield call(Services.search, query);
    yield put(setNearJobs(jobs));
  } catch (error) {
    console.log(error);
  }
}

const jobsSaga = [
  takeLatest('jobs/getPorpularJobs', findPopularJobs),
  takeLatest('jobs/getNearJobs', findNearJobs),
];
export default jobsSaga;
