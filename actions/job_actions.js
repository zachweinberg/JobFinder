import axios from 'axios';
import { FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS } from './types';
import INDEED_DATA from '../indeedData.json';



export const fetchJobs = (region, callback) => async dispatch => {
  try {
    let data = INDEED_DATA;
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();

  } catch (e) {
    console.error(e);
  }
};

export const likeJob = (job) => {
  return {
    payload: job,
    type: LIKE_JOB
  }
}

export const clearLikedJobs = () => {
  return { type: CLEAR_LIKED_JOBS };
}
