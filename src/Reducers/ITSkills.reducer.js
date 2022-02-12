import {
  SEEKER_ITSKILLS_DELETE_FAILED,
  SEEKER_ITSKILLS_DELETE_REQUEST,
  SEEKER_ITSKILLS_DELETE_SUCCESS,
  SEEKER_ITSKILLS_FINDBYID_FAILED,
  SEEKER_ITSKILLS_FINDBYID_REQUEST,
  SEEKER_ITSKILLS_FINDBYID_SUCCESS,
  SEEKER_ITSKILLS_FINDBYSEEKERID_FAILED,
  SEEKER_ITSKILLS_FINDBYSEEKERID_REQUEST,
  SEEKER_ITSKILLS_FINDBYSEEKERID_SUCCESS,
  SEEKER_ITSKILLS_UPDATE_FAILED,
  SEEKER_ITSKILLS_UPDATE_REQUEST,
  SEEKER_ITSKILLS_UPDATE_SUCCESS,
  SEEKER_ITSKILLS_UPLOAD_FAILED,
  SEEKER_ITSKILLS_UPLOAD_REQUEST,
  SEEKER_ITSKILLS_UPLOAD_SUCCESS,
} from '../Constants/ItSkills.constant';

export const ITSKillsUploadReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_ITSKILLS_UPLOAD_REQUEST:
      return { loading: true };
    case SEEKER_ITSKILLS_UPLOAD_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_ITSKILLS_UPLOAD_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const ITSKillsUpdateReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_ITSKILLS_UPDATE_REQUEST:
      return { loading: true };
    case SEEKER_ITSKILLS_UPDATE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_ITSKILLS_UPDATE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ITSKillsDeleteReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_ITSKILLS_DELETE_REQUEST:
      return { loading: true };
    case SEEKER_ITSKILLS_DELETE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_ITSKILLS_DELETE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ITSKillsFindByIdReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_ITSKILLS_FINDBYID_REQUEST:
      return { loading: true };
    case SEEKER_ITSKILLS_FINDBYID_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_ITSKILLS_FINDBYID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const ITSKillsFindBySeekerIdIdReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_ITSKILLS_FINDBYSEEKERID_REQUEST:
      return { loading: true };
    case SEEKER_ITSKILLS_FINDBYSEEKERID_SUCCESS:
      return { ...state, loading: false, seekerITSkills: action.payload };
    case SEEKER_ITSKILLS_FINDBYSEEKERID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
