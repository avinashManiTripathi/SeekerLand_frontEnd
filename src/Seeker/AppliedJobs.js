import React, { useEffect } from 'react';

import JobCards from '../Component/JobCards';
import { useDispatch, useSelector } from 'react-redux';
import { FindAppliedJobsBySeekerIdAction } from '../Actions/Jobs.action';

const AppliedJobs = (props) => {
  const dispatch = useDispatch();
  const { jobs } = useSelector(
    (state) => state.findAppliedJobBySeekerIdReducers
  );

  useEffect(() => {
    dispatch(FindAppliedJobsBySeekerIdAction());
  }, [dispatch]);

  return (
    <div style={{ marginTop: '10px' }}>
      <div className='saved-jobs-title border '>
        <h2>{jobs && jobs.length} Applied Job(s) </h2>
      </div>
      <div className='mt-2'>
        <JobCards data={jobs}></JobCards>
      </div>
    </div>
  );
};

export default AppliedJobs;
