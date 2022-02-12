import {
  SEEKER_PERSONALDETAILS_DELETE_FAILED,
  SEEKER_PERSONALDETAILS_DELETE_REQUEST,
  SEEKER_PERSONALDETAILS_DELETE_SUCCESS,
  SEEKER_PERSONALDETAILS_FINDBYID_FAILED,
  SEEKER_PERSONALDETAILS_FINDBYID_REQUEST,
  SEEKER_PERSONALDETAILS_FINDBYID_SUCCESS,
  SEEKER_PERSONALDETAILS_FINDBYSEEKERID_FAILED,
  SEEKER_PERSONALDETAILS_FINDBYSEEKERID_REQUEST,
  SEEKER_PERSONALDETAILS_FINDBYSEEKERID_SUCCESS,
  SEEKER_PERSONALDETAILS_UPDATE_FAILED,
  SEEKER_PERSONALDETAILS_UPDATE_REQUEST,
  SEEKER_PERSONALDETAILS_UPDATE_SUCCESS,
  SEEKER_PERSONALDETAILS_UPLOAD_FAILED,
  SEEKER_PERSONALDETAILS_UPLOAD_REQUEST,
  SEEKER_PERSONALDETAILS_UPLOAD_SUCCESS,
} from '../Constants/PersonalDetails.constant';

export const PersonalDetailsUploadReducer = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_PERSONALDETAILS_UPLOAD_REQUEST:
      return { loading: true };
    case SEEKER_PERSONALDETAILS_UPLOAD_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_PERSONALDETAILS_UPLOAD_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PersonalDetailsUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_PERSONALDETAILS_UPDATE_REQUEST:
      return { loading: true };
    case SEEKER_PERSONALDETAILS_UPDATE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_PERSONALDETAILS_UPDATE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PersonalDetailsFindByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_PERSONALDETAILS_FINDBYID_REQUEST:
      return { loading: true };
    case SEEKER_PERSONALDETAILS_FINDBYID_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_PERSONALDETAILS_FINDBYID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PersonalDetailsFindBySeekerIdReducer = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_PERSONALDETAILS_FINDBYSEEKERID_REQUEST:
      return { loading: true };
    case SEEKER_PERSONALDETAILS_FINDBYSEEKERID_SUCCESS:
      return {
        ...state,
        loading: false,
        seekerPersonalDetails: action.payload,
      };
    case SEEKER_PERSONALDETAILS_FINDBYSEEKERID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PersonalDetailsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_PERSONALDETAILS_DELETE_REQUEST:
      return { loading: true };
    case SEEKER_PERSONALDETAILS_DELETE_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_PERSONALDETAILS_DELETE_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
