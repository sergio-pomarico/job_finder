import jobsReducer, {Actions} from './reducer';
import jobsSaga from './saga';
const {
  getPorpularJobs,
  getNearJobs,
  getJobDetail,
  setPorpularJobs,
  setNearJobs,
  setJobDetail,
} = Actions;

export {
  jobsReducer,
  jobsSaga,
  getPorpularJobs,
  getNearJobs,
  getJobDetail,
  setPorpularJobs,
  setNearJobs,
  setJobDetail,
};
