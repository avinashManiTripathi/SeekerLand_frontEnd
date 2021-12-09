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
    await Axios.post('http://localhost:5000/api/v1/education-details', {
      education: education.education,
      specialization: education.specialization,
      universityName: education.universityName,
      fromDate: education.fromDate,
      toDate: education.toDate,
      course: education.course,
      courseType: education.courseType,
    }).then((response) => {
      dispatch({
        type: SEEKER_EDUCATIONDETAIL_UPLOAD_SUCCESS,
        type: response,
      });
      console.log('REsponse ', response);
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
      'http://localhost:5000/api/v1/education-details',
      education
    ).then((response) => {
      dispatch({
        type: SEEKER_EDUCATIONDETAIL_UPDATE_SUCCESS,
        type: response,
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
    Axios.get(`http://localhost:5000/api/v1/education-details?id=${id}`).then(
      (response) => {
        dispatch({
          type: SEEKER_EDUCATIONDETAIL_FINDBYID_SUCCESS,
          type: response,
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
      `http://localhost:5000/api/v1/education-details?id=${id}`
    ).then((response) => {
      dispatch({
        type: SEEKER_EDUCATIONDETAIL_DELETE_SUCCESS,
        type: response,
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

export const EducationDetailFindBySeekerIdAction = (id) => async (dispatch) => {
  dispatch({
    type: SEEKER_EDUCATIONDETAIL_FINDBYSEEKERID_REQUEST,
  });
  try {
    Axios.get(`http://localhost:5000/api/v1/education-details`).then(
      (response) => {
        dispatch({
          type: SEEKER_EDUCATIONDETAIL_FINDBYSEEKERID_SUCCESS,
          type: response,
        });
      }
    );
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
