import {configureStore} from '@reduxjs/toolkit';
import Services from '../api/api';

import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';

// Reducers & Sagas
import {jobsReducer, jobsSaga} from './jobs';

// Saga
function* rootSaga() {
  yield all([...jobsSaga]);
}

// Middlewares
const sagaMiddleware = createSagaMiddleware({context: Services});
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

export default store;
