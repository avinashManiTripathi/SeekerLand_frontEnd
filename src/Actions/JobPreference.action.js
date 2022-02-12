import Axios from 'axios';
import {
  SEEKER_JOBPREFERENCES_DELETE_FAILED,
  SEEKER_JOBPREFERENCES_DELETE_REQUEST,
  SEEKER_JOBPREFERENCES_DELETE_SUCCESS,
  SEEKER_JOBPREFERENCES_FINDBYSEEKERID_FAILED,
  SEEKER_JOBPREFERENCES_FINDBYSEEKERID_REQUEST,
  SEEKER_JOBPREFERENCES_FINDBYSEEKERID_SUCCESS,
  SEEKER_JOBPREFERENCES_UPDATE_FAILED,
  SEEKER_JOBPREFERENCES_UPDATE_REQUEST,
  SEEKER_JOBPREFERENCES_UPDATE_SUCCESS,
  SEEKER_JOBPREFERENCES_UPLOAD_FAILED,
  SEEKER_JOBPREFERENCES_UPLOAD_REQUEST,
  SEEKER_JOBPREFERENCES_UPLOAD_SUCCESS,
} from '../Constants/JobPreferences.constant';

export const JobPreferenceUploadAction =
  (jobPreferences) => async (dispatch) => {
    dispatch({
      type: SEEKER_JOBPREFERENCES_UPLOAD_REQUEST,
    });
    try {
      Axios.post(
        'https://agwate.herokuapp.com/api/v1/JobPreferences',
        jobPreferences,
        { withCredentials: true }
      ).then((response) => {
        dispatch({
          type: SEEKER_JOBPREFERENCES_UPLOAD_SUCCESS,
          payload: response,
        });
      });
    } catch (error) {
      dispatch({
        type: SEEKER_JOBPREFERENCES_UPLOAD_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const JobPreferenceUpdateAction = (education) => async (dispatch) => {
  dispatch({
    type: SEEKER_JOBPREFERENCES_UPDATE_REQUEST,
  });
  try {
    Axios.post(
      'https://agwate.herokuapp.com/api/v1/education-details',
      education
    ).then((response) => {
      dispatch({
        type: SEEKER_JOBPREFERENCES_UPDATE_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_JOBPREFERENCES_UPDATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const JobPreferenceFindBySeekerIdAction = () => async (dispatch) => {
  dispatch({
    type: SEEKER_JOBPREFERENCES_FINDBYSEEKERID_REQUEST,
  });
  try {
    Axios.get('https://agwate.herokuapp.com/api/v1/seeker/JobPreferences', {
      withCredentials: true,
    }).then((response) => {
      console.log('Action Response ', response.data.data);
      dispatch({
        type: SEEKER_JOBPREFERENCES_FINDBYSEEKERID_SUCCESS,
        payload: response.data.data,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_JOBPREFERENCES_FINDBYSEEKERID_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const JobPreferenceDeleteAction = (education) => async (dispatch) => {
  dispatch({
    type: SEEKER_JOBPREFERENCES_DELETE_REQUEST,
  });
  try {
    Axios.post(
      'https://agwate.herokuapp.com/api/v1/education-details',
      education
    ).then((response) => {
      dispatch({
        type: SEEKER_JOBPREFERENCES_DELETE_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_JOBPREFERENCES_DELETE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
