import {
  SEEKER_REGISTRATION_FAILED,
  SEEKER_REGISTRATION_REQUEST,
  SEEKER_REGISTRATION_SUCCESS,
} from '../Constants/Registration.constants';

export const RegistrationReducers = (state = {}, action) => {
  switch (action.type) {
    case SEEKER_REGISTRATION_REQUEST:
      return { loading: true };
    case SEEKER_REGISTRATION_SUCCESS:
      return { ...state, loading: false, seeker: action.payload };
    case SEEKER_REGISTRATION_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
