import {
  SEEKER_JOBPREFERENCES_DELETE_FAILED,
  SEEKER_JOBPREFERENCES_DELETE_REQUEST,
  SEEKER_JOBPREFERENCES_DELETE_SUCCESS,
  SEEKER_JOBPREFERENCES_FINDBYSEEKERID_FAILED,
  SEEKER_JOBPREFERENCES_FINDBYSEEKERID_REQUEST,
  SEEKER_JOBPREFERENCES_FINDBYSEEKERID_SUCCESS,
  SEEKER_JOBPREFERENCES_UPDATE_FAILED,
  SEEKER_JOBPREFERENCES_UPDATE_REQUEST,
  SEEKER_JOBPREFERENCES_UPDATE_SUCCESS,
  SEEKER_JOBPREFERENCES_UPLOAD_FAILED,
  SEEKER_JOBPREFERENCES_UPLOAD_REQUEST,
  SEEKER_JOBPREFERENCES_UPLOAD_SUCCESS,
} from '../Constants/JobPreferences.constant';

export const JobPrefrenceUploadReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_JOBPREFERENCES_UPLOAD_REQUEST:
      return { loading: true };
    case SEEKER_JOBPREFERENCES_UPLOAD_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_JOBPREFERENCES_UPLOAD_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const JobPrefrenceUpdateReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_JOBPREFERENCES_UPDATE_REQUEST:
      return { loading: true };
    case SEEKER_JOBPREFERENCES_UPDATE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_JOBPREFERENCES_UPDATE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const JobPrefrenceFindBySeekerIdReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_JOBPREFERENCES_FINDBYSEEKERID_REQUEST:
      return { loading: true };
    case SEEKER_JOBPREFERENCES_FINDBYSEEKERID_SUCCESS:
      return { ...state, loading: false, seekerJobPreferences: action.payload };
    case SEEKER_JOBPREFERENCES_FINDBYSEEKERID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const JobPrefrenceDeleteReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_JOBPREFERENCES_DELETE_REQUEST:
      return { loading: true };
    case SEEKER_JOBPREFERENCES_DELETE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_JOBPREFERENCES_DELETE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
