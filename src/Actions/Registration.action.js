import Axios from 'axios';
import {
  SEEKER_REGISTRATION_FAILED,
  SEEKER_REGISTRATION_REQUEST,
  SEEKER_REGISTRATION_SUCCESS,
} from '../Constants/Registration.constants';

export const RegistrationAction = (seeker) => async (dispatch) => {
  dispatch({
    type: SEEKER_REGISTRATION_REQUEST,
  });
  try {
    await Axios.post('http://localhost:5000/api/v1/seeker_registration', {
      firstName: seeker.firstName,
      lastName: seeker.lastName,
      gender: 'male',
      mobileNumber: seeker.mobileNumber,
      email: seeker.email,
      password: seeker.password,
    }).then((response) => {
      dispatch({
        type: SEEKER_REGISTRATION_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_REGISTRATION_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
