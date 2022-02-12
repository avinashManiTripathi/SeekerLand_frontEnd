import {
  APPLY_JOB_FAILED,
  APPLY_JOB_REQUEST,
  APPLY_JOB_SUCCESS,
  FIND_APPLY_JOB_FAILED,
  FIND_APPLY_JOB_REQUEST,
  FIND_APPLY_JOB_SUCCESS,
  FIND_JOBBYID_FAILED,
  FIND_JOBBYID_REQUEST,
  FIND_JOBBYID_SUCCESS,
  FIND_JOB_FAILED,
  FIND_JOB_REQUEST,
  FIND_JOB_SUCCESS,
  FIND_SAVED_JOB_FAILED,
  FIND_SAVED_JOB_REQUEST,
  FIND_SAVED_JOB_SUCCESS,
} from '../Constants/Job.constant,';

export const FindSkillsJobsInLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case FIND_JOB_REQUEST:
      return { loading: true };
    case FIND_JOB_SUCCESS:
      return { ...state, loading: false, jobs: action.payload };
    case FIND_JOB_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ApplyJobReducers = (state = {}, action) => {
  switch (action.type) {
    case APPLY_JOB_REQUEST:
      return { loading: true };
    case APPLY_JOB_SUCCESS:
      return { ...state, loading: false, applyResponse: action.payload };
    case APPLY_JOB_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const FindAppliedJobBySeekerIdReducers = (state = {}, action) => {
  switch (action.type) {
    case FIND_APPLY_JOB_REQUEST:
      return { loading: true };
    case FIND_APPLY_JOB_SUCCESS:
      return { ...state, loading: false, jobs: action.payload };
    case FIND_APPLY_JOB_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const FindSavedJobBySeekerIdReducers = (state = {}, action) => {
  switch (action.type) {
    case FIND_SAVED_JOB_REQUEST:
      return { loading: true };
    case FIND_SAVED_JOB_SUCCESS:
      return { ...state, loading: false, jobs: action.payload };
    case FIND_SAVED_JOB_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const FindJobByIdReducers = (state = {}, action) => {
  switch (action.type) {
    case FIND_JOBBYID_REQUEST:
      return { loading: true };
    case FIND_JOBBYID_SUCCESS:
      return { ...state, loading: false, jobDetails: action.payload };
    case FIND_JOBBYID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
