import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import Services from '../../api/api';
import Job from '../../core/job';
import {setPorpularJobs} from './';

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

const authSaga = [takeLatest('jobs/getPorpularJobs', findPopularJobs)];
export default authSaga;
