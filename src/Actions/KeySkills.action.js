import {
  SEEKER_KEYSKILLS_DELETE_FAILED,
  SEEKER_KEYSKILLS_DELETE_REQUEST,
  SEEKER_KEYSKILLS_DELETE_SUCCESS,
  SEEKER_KEYSKILLS_FINDBYID_FAILED,
  SEEKER_KEYSKILLS_FINDBYID_REQUEST,
  SEEKER_KEYSKILLS_FINDBYID_SUCCESS,
  SEEKER_KEYSKILLS_FINDBYSEEKERID_FAILED,
  SEEKER_KEYSKILLS_FINDBYSEEKERID_REQUEST,
  SEEKER_KEYSKILLS_FINDBYSEEKERID_SUCCESS,
  SEEKER_KEYSKILLS_UPDATE_FAILED,
  SEEKER_KEYSKILLS_UPDATE_REQUEST,
  SEEKER_KEYSKILLS_UPDATE_SUCCESS,
  SEEKER_KEYSKILLS_UPLOAD_FAILED,
  SEEKER_KEYSKILLS_UPLOAD_REQUEST,
  SEEKER_KEYSKILLS_UPLOAD_SUCCESS,
} from '../Constants/KeySkills.constant';

export const KeySkillsUploadAction = (itSkills) => async (dispatch) => {
  dispatch({
    type: SEEKER_KEYSKILLS_UPLOAD_REQUEST,
  });
  try {
    await Axios.get('http://localost').then((response) => {
      dispatch({
        type: SEEKER_KEYSKILLS_UPLOAD_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_KEYSKILLS_UPLOAD_FAILED,
      payload:
        error.reponse && error.reponse.data.message
          ? error.reponse.data.message
          : error.message,
    });
  }
};

export const KeySkillsUpdateAction = (itSkills) => async (dispatch) => {
  dispatch({
    type: SEEKER_KEYSKILLS_UPDATE_REQUEST,
  });
  try {
    await Axios.get('http://localost').then((response) => {
      dispatch({
        type: SEEKER_KEYSKILLS_UPDATE_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_KEYSKILLS_UPDATE_FAILED,
      payload:
        error.reponse && error.reponse.data.message
          ? error.reponse.data.message
          : error.message,
    });
  }
};

export const KeySkillsFindByIdAction = (itSkills) => async (dispatch) => {
  dispatch({
    type: SEEKER_KEYSKILLS_FINDBYID_REQUEST,
  });
  try {
    await Axios.get('http://localost').then((response) => {
      dispatch({
        type: SEEKER_KEYSKILLS_FINDBYID_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_KEYSKILLS_FINDBYID_FAILED,
      payload:
        error.reponse && error.reponse.data.message
          ? error.reponse.data.message
          : error.message,
    });
  }
};

export const KeySkillsFindBySeekerIdAction = (itSkills) => async (dispatch) => {
  dispatch({
    type: SEEKER_KEYSKILLS_FINDBYSEEKERID_REQUEST,
  });
  try {
    await Axios.get('http://localost').then((response) => {
      dispatch({
        type: SEEKER_KEYSKILLS_FINDBYSEEKERID_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_KEYSKILLS_FINDBYSEEKERID_FAILED,
      payload:
        error.reponse && error.reponse.data.message
          ? error.reponse.data.message
          : error.message,
    });
  }
};

export const KeySkillsDeleteAction = (itSkills) => async (dispatch) => {
  dispatch({
    type: SEEKER_KEYSKILLS_DELETE_REQUEST,
  });
  try {
    await Axios.get('http://localost').then((response) => {
      dispatch({
        type: SEEKER_KEYSKILLS_DELETE_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_KEYSKILLS_DELETE_FAILED,
      payload:
        error.reponse && error.reponse.data.message
          ? error.reponse.data.message
          : error.message,
    });
  }
};
