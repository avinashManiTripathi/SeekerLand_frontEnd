import {
  SEEKER_WORKEXPERIENCE_DELETE_FAILED,
  SEEKER_WORKEXPERIENCE_DELETE_REQUEST,
  SEEKER_WORKEXPERIENCE_DELETE_SUCCESS,
  SEEKER_WORKEXPERIENCE_FINDBYID_FAILED,
  SEEKER_WORKEXPERIENCE_FINDBYID_REQUEST,
  SEEKER_WORKEXPERIENCE_FINDBYID_SUCCESS,
  SEEKER_WORKEXPERIENCE_FINDBYSEEKERID_FAILED,
  SEEKER_WORKEXPERIENCE_FINDBYSEEKERID_REQUEST,
  SEEKER_WORKEXPERIENCE_FINDBYSEEKERID_SUCCESS,
  SEEKER_WORKEXPERIENCE_UPDATE_FAILED,
  SEEKER_WORKEXPERIENCE_UPDATE_REQUEST,
  SEEKER_WORKEXPERIENCE_UPDATE_SUCCESS,
  SEEKER_WORKEXPERIENCE_UPLOAD_FAILED,
  SEEKER_WORKEXPERIENCE_UPLOAD_REQUEST,
  SEEKER_WORKEXPERIENCE_UPLOAD_SUCCESS,
} from '../Constants/WorkExperience.constant';

export const WorkExperienceUploadReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_WORKEXPERIENCE_UPLOAD_REQUEST:
      return { loading: true };
    case SEEKER_WORKEXPERIENCE_UPLOAD_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_WORKEXPERIENCE_UPLOAD_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const WorkExperienceDeleteReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_WORKEXPERIENCE_DELETE_REQUEST:
      return { loading: true };
    case SEEKER_WORKEXPERIENCE_DELETE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_WORKEXPERIENCE_DELETE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const WorkExperienceUpdateReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_WORKEXPERIENCE_UPDATE_REQUEST:
      return { loading: true };
    case SEEKER_WORKEXPERIENCE_UPDATE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_WORKEXPERIENCE_UPDATE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const WorkExperienceFindByIdReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_WORKEXPERIENCE_FINDBYID_REQUEST:
      return { loading: true };
    case SEEKER_WORKEXPERIENCE_FINDBYID_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_WORKEXPERIENCE_FINDBYID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const WorkExperienceFindBySeekerIdReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_WORKEXPERIENCE_FINDBYSEEKERID_REQUEST:
      return { loading: true };
    case SEEKER_WORKEXPERIENCE_FINDBYSEEKERID_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_WORKEXPERIENCE_FINDBYSEEKERID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
