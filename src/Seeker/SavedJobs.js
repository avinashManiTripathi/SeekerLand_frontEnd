import React, { useEffect } from 'react';
import JobCards from '../Component/JobCards';
import { useDispatch, useSelector } from 'react-redux';
import { FindSavedJobsBySeekerIdAction } from '../Actions/Jobs.action';

const SavedJobs = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.findSavedJobBySeekerIdReducers);

  useEffect(() => {
    dispatch(FindSavedJobsBySeekerIdAction());
  }, [dispatch]);

  return (
    <div
      style={{
        marginTop: '10px',
      }}>
      <div className='saved-jobs-title  border'>
        <h2>03 Saved Job(s) </h2>
      </div>
      <div className='mt-2'>
        <JobCards data={jobs}></JobCards>
      </div>
    </div>
  );
};

export default SavedJobs;
