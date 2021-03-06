import Axios from 'axios';
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

export const PersonalDetailsUploadAction =
  (personalDetail) => async (dispatch) => {
    dispatch({
      type: SEEKER_PERSONALDETAILS_UPLOAD_REQUEST,
    });
    try {
      await Axios.post(
        'https://agwate.herokuapp.com/api/v1/seeker/personalDetails',
        personalDetail,
        { withCredentials: true }
      ).then((response) => {
        dispatch({
          type: SEEKER_PERSONALDETAILS_UPLOAD_SUCCESS,
          payload: response,
        });
      });
    } catch (error) {
      dispatch({
        type: SEEKER_PERSONALDETAILS_UPLOAD_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const PersonalDetailsUpdateAction = (project) => async (dispatch) => {
  dispatch({
    type: SEEKER_PERSONALDETAILS_UPDATE_REQUEST,
  });
  try {
    await Axios.post(
      'https://agwate.herokuapp.com/api/v1/upload-project',
      project
    ).then((response) => {
      dispatch({
        type: SEEKER_PERSONALDETAILS_UPDATE_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_PERSONALDETAILS_UPDATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PersonalDetailsDeleteAction = (project) => async (dispatch) => {
  dispatch({
    type: SEEKER_PERSONALDETAILS_DELETE_REQUEST,
  });
  try {
    await Axios.post(
      'https://agwate.herokuapp.com/api/v1/upload-project',
      project
    ).then((response) => {
      dispatch({
        type: SEEKER_PERSONALDETAILS_DELETE_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_PERSONALDETAILS_DELETE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PersonalDetailsFindByIdAction = (project) => async (dispatch) => {
  dispatch({
    type: SEEKER_PERSONALDETAILS_FINDBYID_REQUEST,
  });
  try {
    await Axios.post(
      'https://agwate.herokuapp.com/api/v1/upload-project',
      project
    ).then((response) => {
      dispatch({
        type: SEEKER_PERSONALDETAILS_FINDBYID_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_PERSONALDETAILS_FINDBYID_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PersonalDetailsFindBySeekerIdAction = () => async (dispatch) => {
  dispatch({
    type: SEEKER_PERSONALDETAILS_FINDBYSEEKERID_REQUEST,
  });
  try {
    await Axios.get('https://agwate.herokuapp.com/api/v1/seeker/personalDetails', {
      withCredentials: true,
    }).then((response) => {
      dispatch({
        type: SEEKER_PERSONALDETAILS_FINDBYSEEKERID_SUCCESS,
        payload: response.data.data,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_PERSONALDETAILS_FINDBYSEEKERID_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
