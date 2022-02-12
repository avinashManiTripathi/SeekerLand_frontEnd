import Axios from 'axios';
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

export const EducationDetailUploadAction = (education) => async (dispatch) => {
  dispatch({
    type: SEEKER_EDUCATIONDETAIL_UPLOAD_REQUEST,
  });
  try {
    await Axios.post(
      'https://agwate.herokuapp.com/api/v1/seeker/educations',
      {
        education: education.education,
        specialization: education.specialization,
        universityName: education.universityName,
        fromDate: education.fromDate,
        toDate: education.toDate,
        course: education.course,
        courseType: education.courseType,
      },
      { withCredentials: true }
    ).then((response) => {
      dispatch({
        type: SEEKER_EDUCATIONDETAIL_UPLOAD_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_EDUCATIONDETAIL_UPLOAD_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EducationDetailUpdateAction = (education) => async (dispatch) => {
  dispatch({
    type: SEEKER_EDUCATIONDETAIL_UPDATE_REQUEST,
  });
  try {
    Axios.post(
      'https://agwate.herokuapp.com/api/v1/education-details',
      education
    ).then((response) => {
      dispatch({
        type: SEEKER_EDUCATIONDETAIL_UPDATE_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_EDUCATIONDETAIL_UPDATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EducationDetailFindByIDAction = (id) => async (dispatch) => {
  dispatch({
    type: SEEKER_EDUCATIONDETAIL_FINDBYID_REQUEST,
  });
  try {
    Axios.get(`https://agwate.herokuapp.com/api/v1/education-details?id=${id}`).then(
      (response) => {
        dispatch({
          type: SEEKER_EDUCATIONDETAIL_FINDBYID_SUCCESS,
          payload: response,
        });
      }
    );
  } catch (error) {
    dispatch({
      type: SEEKER_EDUCATIONDETAIL_FINDBYID_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EducationDetailDeleteAction = (id) => async (dispatch) => {
  dispatch({
    type: SEEKER_EDUCATIONDETAIL_DELETE_REQUEST,
  });
  try {
    Axios.delete(
      `https://agwate.herokuapp.com/api/v1/education-details?id=${id}`
    ).then((response) => {
      dispatch({
        type: SEEKER_EDUCATIONDETAIL_DELETE_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_EDUCATIONDETAIL_DELETE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EducationDetailFindBySeekerIdAction = () => async (dispatch) => {
  dispatch({
    type: SEEKER_EDUCATIONDETAIL_FINDBYSEEKERID_REQUEST,
  });
  try {
    Axios.get(`https://agwate.herokuapp.com/api/v1/seeker/educations`, {
      withCredentials: true,
    }).then((response) => {
      dispatch({
        type: SEEKER_EDUCATIONDETAIL_FINDBYSEEKERID_SUCCESS,
        payload: response.data.data,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_EDUCATIONDETAIL_FINDBYSEEKERID_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
