import Axios from 'axios';
import { SEEKER_EDUCATIONDETAIL_UPLOAD_SUCCESS } from '../Constants/EducationDetail.constant';
import {
  SEEKER_ITSKILLS_DELETE_FAILED,
  SEEKER_ITSKILLS_DELETE_REQUEST,
  SEEKER_ITSKILLS_DELETE_SUCCESS,
  SEEKER_ITSKILLS_FINDBYID_FAILED,
  SEEKER_ITSKILLS_FINDBYID_REQUEST,
  SEEKER_ITSKILLS_FINDBYID_SUCCESS,
  SEEKER_ITSKILLS_FINDBYSEEKERID_FAILED,
  SEEKER_ITSKILLS_FINDBYSEEKERID_REQUEST,
  SEEKER_ITSKILLS_FINDBYSEEKERID_SUCCESS,
  SEEKER_ITSKILLS_UPDATE_FAILED,
  SEEKER_ITSKILLS_UPDATE_REQUEST,
  SEEKER_ITSKILLS_UPDATE_SUCCESS,
  SEEKER_ITSKILLS_UPLOAD_FAILED,
  SEEKER_ITSKILLS_UPLOAD_REQUEST,
  SEEKER_ITSKILLS_UPLOAD_SUCCESS,
} from '../Constants/ItSkills.constant';

export const ITSkillsUploadAction = (itSkills) => async (dispatch) => {
  dispatch({
    type: SEEKER_ITSKILLS_UPLOAD_REQUEST,
  });
  try {
    await Axios.post('http://localhost:5000/api/v1/itskills', {
      skillName: itSkills.skillName,
      version: itSkills.version,
      lastUsed: itSkills.lastUsed,
      experience: itSkills.experience,
    }).then((response) => {
      dispatch({
        type: SEEKER_ITSKILLS_UPLOAD_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SEEKER_ITSKILLS_UPLOAD_FAILED,
      payload:
        error.reponse && error.reponse.data.message
          ? error.reponse.data.message
          : error.message,
    });
  }
};

export const ITSkillsUpdateAction = (itSkills) => async (dispatch) => {
  dispatch({
    type: SEEKER_ITSKILLS_UPDATE_REQUEST,
  });
  try {
    await Axios.get('http://localost').then((response) => {
      dispatch({
        type: SEEKER_ITSKILLS_UPDATE_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_ITSKILLS_UPDATE_FAILED,
      payload:
        error.reponse && error.reponse.data.message
          ? error.reponse.data.message
          : error.message,
    });
  }
};

export const ITSkillsFindByIdAction = (itSkills) => async (dispatch) => {
  dispatch({
    type: SEEKER_ITSKILLS_FINDBYID_REQUEST,
  });
  try {
    await Axios.get('http://localost').then((response) => {
      dispatch({
        type: SEEKER_ITSKILLS_FINDBYID_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_ITSKILLS_FINDBYID_FAILED,
      payload:
        error.reponse && error.reponse.data.message
          ? error.reponse.data.message
          : error.message,
    });
  }
};

export const ITSkillsFindBySeekerIdAction = (itSkills) => async (dispatch) => {
  dispatch({
    type: SEEKER_ITSKILLS_FINDBYSEEKERID_REQUEST,
  });
  try {
    await Axios.get('http://localost').then((response) => {
      dispatch({
        type: SEEKER_ITSKILLS_FINDBYSEEKERID_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_ITSKILLS_FINDBYSEEKERID_FAILED,
      payload:
        error.reponse && error.reponse.data.message
          ? error.reponse.data.message
          : error.message,
    });
  }
};

export const ITSkillsDeleteAction = (itSkills) => async (dispatch) => {
  dispatch({
    type: SEEKER_ITSKILLS_DELETE_REQUEST,
  });
  try {
    await Axios.get('http://localost').then((response) => {
      dispatch({
        type: SEEKER_ITSKILLS_DELETE_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_ITSKILLS_DELETE_FAILED,
      payload:
        error.reponse && error.reponse.data.message
          ? error.reponse.data.message
          : error.message,
    });
  }
};
