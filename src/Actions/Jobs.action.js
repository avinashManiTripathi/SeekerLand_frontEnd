import Axios from 'axios';
import {
  APPLY_JOB_FAILED,
  APPLY_JOB_REQUEST,
  APPLY_JOB_SUCCESS,
  FIND_APPLY_JOB_FAILED,
  FIND_APPLY_JOB_REQUEST,
  FIND_APPLY_JOB_SUCCESS,
  FIND_JOBBYID_FAILED,
  FIND_JOBBYID_REQUEST,
  FIND_JOBBYID_SUCCESS,
  FIND_JOB_FAILED,
  FIND_JOB_REQUEST,
  FIND_JOB_SUCCESS,
  FIND_SAVED_JOB_FAILED,
  FIND_SAVED_JOB_REQUEST,
  FIND_SAVED_JOB_SUCCESS,
  SAVED_JOB_FAILED,
  SAVED_JOB_REQUEST,
  SAVED_JOB_SUCCESS,
} from '../Constants/Job.constant,';

export const FindSkillsJobsInLocationAction =
  (skills, location) => async (dispatch) => {
    dispatch({
      type: FIND_JOB_REQUEST,
    });
    try {
      await Axios.get(
        `https://agwate.herokuapp.com/api/v1/jobs${skills ? '/' + skills : ''}${
          location ? '/' + location : '/jobs'
        }`,
        { withCredentials: true }
      ).then((response) => {
        dispatch({
          type: FIND_JOB_SUCCESS,
          payload: response.data.data,
        });
      });
    } catch (error) {
      dispatch({
        type: FIND_JOB_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const ApplyJobsAction = (id) => async (dispatch) => {
  dispatch({
    type: APPLY_JOB_REQUEST,
  });
  try {
    await Axios.post(
      'https://agwate.herokuapp.com/api/v1/job/apply_job',
      {
        jobId: id,
      },
      { withCredentials: true }
    ).then((response) => {
      dispatch({
        type: APPLY_JOB_SUCCESS,
        payload: response.data,
      });
    });
  } catch (error) {
    dispatch({
      type: APPLY_JOB_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SavedJobsAction = (id) => async (dispatch) => {
  dispatch({
    type: SAVED_JOB_REQUEST,
  });
  try {
    await Axios.post(
      'https://agwate.herokuapp.com/api/v1/job/saved_job',
      {
        jobId: id,
      },
      { withCredentials: true }
    ).then((response) => {
      dispatch({
        type: SAVED_JOB_SUCCESS,
        payload: response.data,
      });
    });
  } catch (error) {
    dispatch({
      type: SAVED_JOB_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const FindAppliedJobsBySeekerIdAction = () => async (dispatch) => {
  dispatch({
    type: FIND_APPLY_JOB_REQUEST,
  });
  try {
    await Axios.get(
      'https://agwate.herokuapp.com/api/v1/job/applied/jobs',

      { withCredentials: true }
    ).then((response) => {
      dispatch({
        type: FIND_APPLY_JOB_SUCCESS,
        payload: response.data.data,
      });
    });
  } catch (error) {
    dispatch({
      type: FIND_APPLY_JOB_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const FindSavedJobsBySeekerIdAction = () => async (dispatch) => {
  dispatch({
    type: FIND_SAVED_JOB_REQUEST,
  });
  try {
    await Axios.get(
      'https://agwate.herokuapp.com/api/v1/job/saved_job',

      { withCredentials: true }
    ).then((response) => {
      dispatch({
        type: FIND_SAVED_JOB_SUCCESS,
        payload: response.data.data,
      });
    });
  } catch (error) {
    dispatch({
      type: FIND_SAVED_JOB_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const FindJobByIdAction = (id) => async (dispatch) => {
  dispatch({
    type: FIND_JOBBYID_REQUEST,
  });
  try {
    await Axios.get(`https://agwate.herokuapp.com/api/v1/job/${id}`, {
      withCredentials: true,
    }).then((response) => {
      dispatch({
        type: FIND_JOBBYID_SUCCESS,
        payload: response.data.data,
      });
    });
  } catch (error) {
    dispatch({
      type: FIND_JOBBYID_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
