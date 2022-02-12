import Axios from 'axios';
import {
  SEEKER_PROJECT_UPLOAD_REQUEST,
  SEEKER_PROJECT_UPLOAD_SUCCESS,
  SEEKER_PROJECT_UPLOAD_FAILED,
  SEEKER_PROJECT_FINDBYID_REQUEST,
  SEEKER_PROJECT_FINDBYID_FAILED,
  SEEKER_PROJECT_FINDBYID_SUCCESS,
  SEEKER_PROJECT_UPDATE_REQUEST,
  SEEKER_PROJECT_UPDATE_SUCCESS,
  SEEKER_PROJECT_UPDATE_FAILED,
  SEEKER_PROJECT_DELETE_REQUEST,
  SEEKER_PROJECT_DELETE_SUCCESS,
  SEEKER_PROJECT_DELETE_FAILED,
  SEEKER_PROJECT_FINDBYSEEKERID_SUCCESS,
  SEEKER_PROJECT_FINDBYSEEKERID_REQUEST,
  SEEKER_PROJECT_FINDBYSEEKERID_FAILED,
} from '../Constants/Projects.constants';

export const ProjectUploadAction = (project) => async (dispatch) => {
  dispatch({
    type: SEEKER_PROJECT_UPLOAD_REQUEST,
  });
  try {
    await Axios.post(
      'https://agwate.herokuapp.com/api/v1/seeker/project',
      {
        projectTitle: project.projectTitle,
        projectStatus: project.projectStatus,
        client: project.client,
        fromDate: project.fromDate,
        toDate: project.toDate,
        description: project.description,
      },
      { withCredentials: true }
    ).then((response) => {
      dispatch({
        type: SEEKER_PROJECT_UPLOAD_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_PROJECT_UPLOAD_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const FindProjectByIdAction = (id) => async (dispatch) => {
  dispatch({
    type: SEEKER_PROJECT_FINDBYID_REQUEST,
  });
  try {
    await Axios.get(`https://agwate.herokuapp.com/api/vi/project?id=${id}`).then(
      (response) => {
        dispatch({
          type: SEEKER_PROJECT_FINDBYID_SUCCESS,
          payload: response.data,
        });
      }
    );
  } catch (error) {
    dispatch({
      type: SEEKER_PROJECT_FINDBYID_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ProjectUpdateAction = (project) => async (dispatch) => {
  dispatch({
    type: SEEKER_PROJECT_UPDATE_REQUEST,
  });
  try {
    await Axios.put(
      'https://agwate.herokuapp.com/api/v1/upload-project',
      project
    ).then((response) => {
      dispatch({
        type: SEEKER_PROJECT_UPDATE_SUCCESS,
        payload: response,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_PROJECT_UPDATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ProjectDeleteAction = (id) => async (dispatch) => {
  dispatch({
    type: SEEKER_PROJECT_DELETE_REQUEST,
  });
  try {
    await Axios.delete(`https://agwate.herokuapp.com/api/v1/project/${id}`).then(
      (response) => {
        dispatch({
          type: SEEKER_PROJECT_DELETE_SUCCESS,
          payload: response,
        });
      }
    );
  } catch (error) {
    dispatch({
      type: SEEKER_PROJECT_DELETE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ProjectFindBySeekerIdAction = () => async (dispatch) => {
  dispatch({
    type: SEEKER_PROJECT_FINDBYSEEKERID_REQUEST,
  });
  try {
    await Axios.get('https://agwate.herokuapp.com/api/v1/seeker/project', {
      withCredentials: true,
    }).then((response) => {
      console.log('Seeker Project Action', response);
      dispatch({
        type: SEEKER_PROJECT_FINDBYSEEKERID_SUCCESS,
        payload: response.data,
      });
    });
  } catch (error) {
    dispatch({
      type: SEEKER_PROJECT_FINDBYSEEKERID_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
