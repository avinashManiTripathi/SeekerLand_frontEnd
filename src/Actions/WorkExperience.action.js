import { Axios } from 'axios';
import {
  SEEKER_WORKEXPERIENCE_DELETE_FAILED,
  SEEKER_WORKEXPERIENCE_DELETE_REQUEST,
  SEEKER_WORKEXPERIENCE_DELETE_SUCCESS,
  SEEKER_WORKEXPERIENCE_FINDBYID_REQUEST,
  SEEKER_WORKEXPERIENCE_FINDBYID_SUCCESS,
  SEEKER_WORKEXPERIENCE_FINDBYSEEKERID_FAILED,
  SEEKER_WORKEXPERIENCE_FINDBYSEEKERID_REQUEST,
  SEEKER_WORKEXPERIENCE_FINDBYSEEKERID_SUCCESS,
  SEEKER_WORKEXPERIENCE_UPDATE_FAILED,
  SEEKER_WORKEXPERIENCE_UPDATE_REQUEST,
  SEEKER_WORKEXPERIENCE_UPDATE_SUCCESS,
  SEEKER_WORKEXPERIENCE_UPLOAD_FAILED,
  SEEKER_WORKEXPERIENCE_UPLOAD_REQUEST,
  SEEKER_WORKEXPERIENCE_UPLOAD_SUCCESS,
} from '../Constants/WorkExperience.constant';

export const WorkExperienceUploadAction = (experience) => async (dispatch) => {
  dispatch({
    type: SEEKER_WORKEXPERIENCE_UPLOAD_REQUEST,
  });
  try {
    await Axios.post(
      'http://localhost:5000/api/v1/workExperience',
      experience
    ).then((response) => {
      dispatch({
        type: SEEKER_WORKEXPERIENCE_UPLOAD_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_WORKEXPERIENCE_UPLOAD_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const WorkExperienceUpdateAction = (experience) => async (dispatch) => {
  dispatch({
    type: SEEKER_WORKEXPERIENCE_UPDATE_REQUEST,
  });
  try {
    await Axios.post(
      'http://localhost:5000/api/v1/workExperience',
      experience
    ).then((response) => {
      dispatch({
        type: SEEKER_WORKEXPERIENCE_UPDATE_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_WORKEXPERIENCE_UPDATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const WorkExperienceDeleteAction = (experience) => async (dispatch) => {
  dispatch({
    type: SEEKER_WORKEXPERIENCE_DELETE_REQUEST,
  });
  try {
    await Axios.delete(
      'http://localhost:5000/api/v1/workExperience',
      experience
    ).then((response) => {
      dispatch({
        type: SEEKER_WORKEXPERIENCE_DELETE_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_WORKEXPERIENCE_DELETE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const WorkExperienceFindBySeekerIdAction =
  (experience) => async (dispatch) => {
    dispatch({
      type: SEEKER_WORKEXPERIENCE_FINDBYSEEKERID_REQUEST,
    });
    try {
      await Axios.get(
        'http://localhost:5000/api/v1/workExperience',
        experience
      ).then((response) => {
        dispatch({
          type: SEEKER_WORKEXPERIENCE_FINDBYSEEKERID_SUCCESS,
          payload: response,
        });
      });
    } catch (error) {
      dispatch({
        type: SEEKER_WORKEXPERIENCE_FINDBYSEEKERID_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const WorkExperienceFindByIdAction =
  (experience) => async (dispatch) => {
    dispatch({
      type: SEEKER_WORKEXPERIENCE_FINDBYID_REQUEST,
    });
    try {
      await Axios.get(
        'http://localhost:5000/api/v1/workExperience',
        experience
      ).then((response) => {
        dispatch({
          type: SEEKER_WORKEXPERIENCE_FINDBYID_SUCCESS,
          payload: response,
        });
      });
    } catch (error) {
      dispatch({
        type: SEEKER_WORKEXPERIENCE_FINDBYSEEKERID_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
