import {
  SEEKER_EDUCATIONDETAIL_DELETE_FAILED,
  SEEKER_EDUCATIONDETAIL_DELETE_REQUEST,
  SEEKER_EDUCATIONDETAIL_DELETE_SUCCESS,
  SEEKER_EDUCATIONDETAIL_FINDBYID_FAILED,
  SEEKER_EDUCATIONDETAIL_FINDBYID_REQUEST,
  SEEKER_EDUCATIONDETAIL_FINDBYID_SUCCESS,
  SEEKER_EDUCATIONDETAIL_FINDBYSEEKERID_FAILED,
  SEEKER_EDUCATIONDETAIL_FINDBYSEEKERID_REQUEST,
  SEEKER_EDUCATIONDETAIL_FINDBYSEEKERID_SUCCESS,
  SEEKER_EDUCATIONDETAIL_UPDATE_FAILED,
  SEEKER_EDUCATIONDETAIL_UPDATE_REQUEST,
  SEEKER_EDUCATIONDETAIL_UPDATE_SUCCESS,
  SEEKER_EDUCATIONDETAIL_UPLOAD_FAILED,
  SEEKER_EDUCATIONDETAIL_UPLOAD_REQUEST,
  SEEKER_EDUCATIONDETAIL_UPLOAD_SUCCESS,
} from '../Constants/EducationDetail.constant';

export const EducationDetailUploadReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_EDUCATIONDETAIL_UPLOAD_REQUEST:
      return { loading: true };
    case SEEKER_EDUCATIONDETAIL_UPLOAD_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_EDUCATIONDETAIL_UPLOAD_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const EducationDetailUpdateReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_EDUCATIONDETAIL_UPDATE_REQUEST:
      return { loading: true };
    case SEEKER_EDUCATIONDETAIL_UPDATE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_EDUCATIONDETAIL_UPDATE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const EducationDetailFindByIdReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_EDUCATIONDETAIL_FINDBYID_REQUEST:
      return { loading: true };
    case SEEKER_EDUCATIONDETAIL_FINDBYID_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_EDUCATIONDETAIL_FINDBYID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const EducationDetailFindBySeekerIdReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_EDUCATIONDETAIL_FINDBYSEEKERID_REQUEST:
      return { loading: true };
    case SEEKER_EDUCATIONDETAIL_FINDBYSEEKERID_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_EDUCATIONDETAIL_FINDBYSEEKERID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const EducationDetailDeleteReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_EDUCATIONDETAIL_DELETE_REQUEST:
      return { loading: true };
    case SEEKER_EDUCATIONDETAIL_DELETE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_EDUCATIONDETAIL_DELETE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
