import jobsReducer, {Actions} from './reducer';
import jobsSaga from './saga';
const {getPorpularJobs, getNearJobs, setPorpularJobs, setNearJobs} = Actions;

export {
  jobsReducer,
  jobsSaga,
  getPorpularJobs,
  getNearJobs,
  setPorpularJobs,
  setNearJobs,
};
