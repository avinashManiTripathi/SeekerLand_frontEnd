import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';

const JobCards = ({ data }) => {
  const [state, setState] = useState({
    jobId: null,
    clickAppyButton: false,
  });
  const history = useHistory();
  const handleOnClickJobCard = () => {
    history.push('/job-details');
  };

  const handleApplyJob = (id) => {
    setTimeout(
      setState({
        jobId: id,
        clickAppyButton: true,
      }),
      10000
    );
  };

  return (
    <div>
      {data &&
        data.map((data) => {
          return (
            <div className='bg-white shadow job-card-wrapper '>
              <div className='job-card-inner'>
                <div onClick={() => handleOnClickJobCard(data.id)}>
                  <h2>{data.title}</h2>
                  <h3>{data.companyName}</h3>
                  <div className='job-card-svl'>
                    <span>
                      <i className='fa fa-inr'></i>120000
                    </span>
                    <span>
                      <i className='fa fa-user'></i>25
                    </span>
                    <span>
                      <i className='fa fa-map-marker'></i>
                      {data.location}
                    </span>
                  </div>
                  <p>
                    <span
                      style={{
                        fontWeight: 'bold',
                      }}>
                      Skills :{' '}
                    </span>{' '}
                    {data.skills &&
                      data.skills.map((skills) => {
                        return <span> {skills.name} </span>;
                      })}
                  </p>
                  <p>
                    In these roles you will be responsible for: * * As an
                    integral part of the NTT Data Consulting Team, the person
                    will be responsible for leading the discussions with client
                    from a Business perspective. *
                  </p>
                </div>

                <hr />
                <div className='row'>
                  <div className='col-md-6'>
                    <p className=' d-flex justify-content-start'>
                      Post On 2 Days Ago
                    </p>
                  </div>
                  <div className='col-md-6 d-flex justify-content-end'>
                    <button className='job-card-footer-icon'>
                      <i class='fa fa-star-o' aria-hidden='true'></i>
                    </button>
                    <button className='job-card-footer-icon'>
                      <i class='fa fa-share-alt' aria-hidden='true'></i>
                    </button>

                    <button
                      onClick={(e) => handleApplyJob(data.id)}
                      className='btn  btn-danger btn-apply d-flex justify-content-end'>
                      {state.clickAppyButton && state.jobId === data.id ? (
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
