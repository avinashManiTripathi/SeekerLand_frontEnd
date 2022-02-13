import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { SavedJobsAction } from '../Actions/Jobs.action';
import Alert from 'react-bootstrap/Alert';

const JobCards = ({ data, handleApplyJob }) => {
  const [state, setState] = useState({
    jobId: null,
    clickAppyButton: false,
    show: false,
    alert: false,
  });
  const { applyResponse } = useSelector(
    (state) => state.applyJobReducers
  );

  console.log('applid Action', applyResponse && applyResponse.message);
  const dispatch = useDispatch();

  const history = useHistory();
  const handleOnClickJobCard = (title, id) => {
    title = title.split(' ').join('-');
    history.push(`/job/${title}&${id}`);
    setState({});
  };

  const [showAlert, setShowAlert] = useState(false);

  // const handleApplyJob = (id) => {
  //   alert(id);
  //   dispatch(ApplyJobsAction(id));

  //   setTimeout(
  //     setState({
  //       jobId: id,
  //       clickAppyButton: true,
  //       show: true,
  //     }),
  //     10000
  //   );
  // };

  const handleSaveJob = (id) => {
    dispatch(SavedJobsAction(id));
  };

  useEffect(() => {
    if (applyResponse && applyResponse.message) {
      setTimeout(setShowAlert(true), 90000);
    }
  }, [applyResponse]);

  return (
    <div>
      {showAlert === true && (
        <Alert
          variant='success'
          onClose={() => setShowAlert(false)}
          dismissible>
          <span>{applyResponse.message}</span>
        </Alert>
      )}

      {data &&
        data.map((data) => {
          return (
            <div key={data._id} className='job-card-wrapper job-cards border'>
              <div className='job-card-inner'>
                <div onClick={() => handleOnClickJobCard(data.title, data._id)}>
                  <h2>{data.title ? data.title : data.job.title}</h2>
                  <h3>MonsterIndia Pvt Ltd</h3>
                  <div className='job-card-svl'>
                    <span>
                      <i className='fa fa-database' aria-hidden='true'></i>
                      {data.minSalary
                        ? data.minSalary
                        : data.job.minSalary} -{' '}
                      {data.maxSalary ? data.maxSalary : data.job.maxSalary}
                    </span>
                    <span>
                      <i className='fa fa-user'></i>
                      {data.vacancy ? data.vacancy : data.job.vacancy}
                    </span>
                    <span>
                      <i className='fa fa-map-marker'></i>
                      {data.city ? data.city : data.job.city}
                    </span>
                  </div>
                  <p>
                    <span
                      style={{
                        fontWeight: 'bold',
                      }}>
                      Skills :{' '}
                    </span>{' '}
                    {data.skills
                      ? data.skills.map((skills) => {
                          return <span key={skills._id}> {skills.name} ,</span>;
                        })
                      : data.job.skills.map((skills) => {
                          return <span> {skills.name} ,</span>;
                        })}
                  </p>
                  <p>
                    {data.description ? data.description : data.job.description}
                  </p>
                </div>

                <hr />
                <div className='row'>
                  <div className='d-flex col-md-9'>
                    <p
                      className=' d-flex justify-content-start'
                      style={{ padding: '0px opx' }}>
                      Post On 2 Days Ago
                    </p>

                    <div style={{ margin: '0px 20px' }}>
                      <p>
                        Job Applicants :
                        <span
                          style={{
                            margin: '0px 5px',
                            fontSize: '12px',
                          }}>
                          488
                        </span>{' '}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-3 d-flex justify-content-end'>
                    <button
                      type='button'
                      name='save'
                      onClick={(e) => handleSaveJob(data._id)}
                      className='job-card-footer-icon'>
                      <i className='fa fa-star-o' aria-hidden='true'></i>
                    </button>
                    <button
                      type='button'
                      name='share'
                      className='job-card-footer-icon'>
                      <i className='fa fa-share-alt' aria-hidden='true'></i>
                    </button>
                    <button
                      onClick={(e) => handleApplyJob(data._id)}
                      className='btn  btn-danger btn-apply d-flex justify-content-end'>
                      {state.clickAppyButton && state.jobId === data._id ? (
                        <>
                          Applying
                          <Spinner
                            as='span'
                            animation='grow'
                            size='sm'
                            role='status'
                            aria-hidden='true'
                          />
                          <Spinner
                            as='span'
                            animation='grow'
                            size='sm'
                            role='status'
                            aria-hidden='true'
                          />
                          <Spinner
                            as='span'
                            animation='grow'
                            size='sm'
                            role='status'
                            aria-hidden='true'
                          />
                        </>
                      ) : (
                        <>Apply </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default JobCards;
