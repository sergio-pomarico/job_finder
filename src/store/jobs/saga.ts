import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import Services from '../../api/api';
import Job from '../../core/job';
import {setNearJobs, setPorpularJobs, setJobDetail} from './';
import {AxiosError} from 'axios';

export function* findPopularJobs(action: PayloadAction<string, string>) {
  const query = action.payload;
  try {
    const jobs: Job[] = yield call(Services.search, query);
    yield put(setPorpularJobs(jobs));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
  }
}

export function* findJobDetail(action: PayloadAction<string, string>) {
  const id = action.payload;
  console.log('findJobDetail', id);
  try {
    const job: Job = yield call(Services.detail, id);
    yield put(setJobDetail(job));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
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
  takeLatest('jobs/getJobDetail', findJobDetail),
];
export default jobsSaga;
