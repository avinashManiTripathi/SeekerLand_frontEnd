import {
  SEEKER_PROJECT_UPLOAD_REQUEST,
  SEEKER_PROJECT_UPLOAD_SUCCESS,
  SEEKER_PROJECT_UPLOAD_FAILED,
  SEEKER_PROJECT_FINDBYID_REQUEST,
  SEEKER_PROJECT_FINDBYID_FAILED,
  SEEKER_PROJECT_FINDBYID_SUCCESS,
  SEEKER_PROJECT_UPDATE_REQUEST,
  SEEKER_PROJECT_UPDATE_SUCCESS,
  SEEKER_PROJECT_UPDATE_FAILED,
  SEEKER_PROJECT_DELETE_REQUEST,
  SEEKER_PROJECT_DELETE_SUCCESS,
  SEEKER_PROJECT_DELETE_FAILED,
  SEEKER_PROJECT_FINDBYSEEKERID_REQUEST,
  SEEKER_PROJECT_FINDBYSEEKERID_SUCCESS,
  SEEKER_PROJECT_FINDBYSEEKERID_FAILED,
} from '../Constants/Projects.constants';

export const ProjectUploadReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_PROJECT_UPLOAD_REQUEST:
      return { loading: true };
    case SEEKER_PROJECT_UPLOAD_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_PROJECT_UPLOAD_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ProjectUpdateReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_PROJECT_UPDATE_REQUEST:
      return { loading: true };
    case SEEKER_PROJECT_UPDATE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_PROJECT_UPDATE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const ProjectFindByIdReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_PROJECT_FINDBYID_REQUEST:
      return { loading: true };
    case SEEKER_PROJECT_FINDBYID_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_PROJECT_FINDBYID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const ProjectDeleteReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_PROJECT_DELETE_REQUEST:
      return { loading: true };
    case SEEKER_PROJECT_DELETE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_PROJECT_DELETE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const ProjectFindBySeekerIdReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_PROJECT_FINDBYSEEKERID_REQUEST:
      return { loading: true };
    case SEEKER_PROJECT_FINDBYSEEKERID_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_PROJECT_FINDBYSEEKERID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
