import {
  SEEKER_DETAIL_FAILED,
  SEEKER_DETAIL_REQUEST,
  SEEKER_DETAIL_SUCCESS,
  SEEKER_LOGIN_FAILED,
  SEEKER_LOGIN_REQUEST,
  SEEKER_LOGIN_SUCCESS,
  SEEKER_REGISTRATION_FAILED,
  SEEKER_REGISTRATION_REQUEST,
  SEEKER_REGISTRATION_SUCCESS,
  SEEKER_LOGOUT_FAILED,
  SEEKER_LOGOUT_REQUEST,
  SEEKER_LOGOUT_SUCCESS,
} from '../Constants/Registration.constants';

export const RegistrationReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_REGISTRATION_REQUEST:
      return { loading: true };
    case SEEKER_REGISTRATION_SUCCESS:
      return { ...state, loading: false, response: action.payload };
    case SEEKER_REGISTRATION_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const LoginReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_LOGIN_REQUEST:
      return { loading: true };
    case SEEKER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case SEEKER_LOGIN_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SeekerDetailReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_DETAIL_REQUEST:
      return { loading: true, isAuthenticated: false };
    case SEEKER_DETAIL_SUCCESS:
      return {
        isAuthenticated: true,
        seeker: action.payload,
      };
    case SEEKER_DETAIL_FAILED:
      return { loading: false, isAuthenticated: false, error: action.payload };
    default:
      return state;
  }
};

export const LogoutReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_LOGOUT_REQUEST:
      return { loading: true, isAuthenticated: false };
    case SEEKER_LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
        data: action.payload,
      };
    case SEEKER_LOGOUT_FAILED:
      return { loading: false, isAuthenticated: false, error: action.payload };
    default:
      return state;
  }
};
