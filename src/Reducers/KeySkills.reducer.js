import {
  SEEKER_KEYSKILLS_DELETE_FAILED,
  SEEKER_KEYSKILLS_DELETE_REQUEST,
  SEEKER_KEYSKILLS_DELETE_SUCCESS,
  SEEKER_KEYSKILLS_FINDBYID_FAILED,
  SEEKER_KEYSKILLS_FINDBYID_REQUEST,
  SEEKER_KEYSKILLS_FINDBYID_SUCCESS,
  SEEKER_KEYSKILLS_FINDBYSEEKERID_FAILED,
  SEEKER_KEYSKILLS_FINDBYSEEKERID_REQUEST,
  SEEKER_KEYSKILLS_FINDBYSEEKERID_SUCCESS,
  SEEKER_KEYSKILLS_UPDATE_FAILED,
  SEEKER_KEYSKILLS_UPDATE_REQUEST,
  SEEKER_KEYSKILLS_UPDATE_SUCCESS,
  SEEKER_KEYSKILLS_UPLOAD_FAILED,
  SEEKER_KEYSKILLS_UPLOAD_REQUEST,
  SEEKER_KEYSKILLS_UPLOAD_SUCCESS,
} from '../Constants/KeySkills.constant';

export const KeySkillsUploadReducer = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_KEYSKILLS_UPLOAD_REQUEST:
      return { loading: true };
    case SEEKER_KEYSKILLS_UPLOAD_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_KEYSKILLS_UPLOAD_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const KeySkillsUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_KEYSKILLS_UPDATE_REQUEST:
      return { loading: true };
    case SEEKER_KEYSKILLS_UPDATE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_KEYSKILLS_UPDATE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const KeySkillsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_KEYSKILLS_DELETE_REQUEST:
      return { loading: true };
    case SEEKER_KEYSKILLS_DELETE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_KEYSKILLS_DELETE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const KeySkillsFindByIdIdReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_KEYSKILLS_FINDBYID_REQUEST:
      return { loading: true };
    case SEEKER_KEYSKILLS_FINDBYID_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_KEYSKILLS_FINDBYID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const KeySkillsFindBySeekerIdIdReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_KEYSKILLS_FINDBYSEEKERID_REQUEST:
      return { loading: true };
    case SEEKER_KEYSKILLS_FINDBYSEEKERID_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_KEYSKILLS_FINDBYSEEKERID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
