import Axios from 'axios';
import {
  SEEKER_DETAIL_FAILED,
  SEEKER_DETAIL_REQUEST,
  SEEKER_DETAIL_SUCCESS,
  SEEKER_LOGIN_FAILED,
  SEEKER_LOGIN_REQUEST,
  SEEKER_LOGIN_SUCCESS,
  SEEKER_LOGOUT_FAILED,
  SEEKER_LOGOUT_REQUEST,
  SEEKER_LOGOUT_SUCCESS,
  SEEKER_REGISTRATION_FAILED,
  SEEKER_REGISTRATION_REQUEST,
  SEEKER_REGISTRATION_SUCCESS,
} from '../Constants/Registration.constants';

export const RegistrationAction = (seeker) => async (dispatch) => {
  dispatch({
    type: SEEKER_REGISTRATION_REQUEST,
  });
  try {
    await Axios.post('https://agwate.herokuapp.com/api/v1/seeker_registration', {
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

export const LoginAction = (seeker, history) => async (dispatch) => {
  dispatch({
    type: SEEKER_LOGIN_REQUEST,
  });
  try {
    await Axios.post(
      'https://agwate.herokuapp.com/api/v1/seeker_login',
      {
        email: seeker.email,
        password: seeker.password,
      },
      { withCredentials: true }
    ).then((response) => {
      if (response.data.token != null) {
        history.push('/dashboard');
        dispatch({
          type: SEEKER_LOGIN_SUCCESS,
          payload: response,
        });
      }
    });
  } catch (error) {
    dispatch({
      type: SEEKER_LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SeekerDetailsAction = () => async (dispatch) => {
  dispatch({
    type: SEEKER_DETAIL_REQUEST,
  });
  try {
    await Axios.get('https://agwate.herokuapp.com/api/v1/seeker_details', {
      withCredentials: true,
    }).then((response) => {
      dispatch({
        type: SEEKER_DETAIL_SUCCESS,
        payload: response.data.data,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_DETAIL_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const LogoutAction = () => async (dispatch) => {
  dispatch({
    type: SEEKER_LOGOUT_REQUEST,
  });
  try {
    await Axios.get('https://agwate.herokuapp.com/api/v1/logout', {
      withCredentials: true,
    }).then((response) => {
      dispatch({
        type: SEEKER_LOGOUT_SUCCESS,
        payload: response.data.data,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_LOGOUT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
