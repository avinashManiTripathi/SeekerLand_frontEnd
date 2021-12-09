import React, { useState } from 'react';
import { Col, Spinner, Toast, ToastContainer } from 'react-bootstrap';
import { useHistory } from 'react-router';

const JobCards = ({ data }) => {
  const [state, setState] = useState({
    jobId: null,
    clickAppyButton: false,
    show: false,
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
        show: true,
      }),
      10000
    );
  };

  return (
    <div>
      {data &&
        data.map((data) => {
          return (
            <div className='job-card-wrapper job-cards'>
              <div className='job-card-inner'>
                <div onClick={() => handleOnClickJobCard(data.id)}>
                  <h2>{data.title}</h2>
                  <h3>{data.companyName}</h3>
                  <div className='job-card-svl'>
                    <span>
                     <i class="fa fa-database" aria-hidden="true"></i>120000
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
                  <p>{data.description}</p>
                </div>

                <hr />
                <div className='row'>
                  <div className='d-flex col-md-9'>
                    {/* <p
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
                    </div> */}
                  </div>
                  <div className='col-md-3 d-flex justify-content-end'>
                    <button type="button" name="share" className='job-card-footer-icon'>
                      <i className='fa fa-star-o' aria-hidden='true'></i>
                    </button>
                    <button type="button" name="save" className='job-card-footer-icon'>
                      <i className='fa fa-share-alt' aria-hidden='true'></i>
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

      <div className='row'>
        <Col xs={6}>
          <ToastContainer position='bottom-end'>
            <Toast
              onClose={() => setState({ show: false })}
              show={state.show}
              delay={3000}
              autohide>
              <Toast.Header>
                <img
                  src='holder.js/20x20?text=%20'
                  className='rounded me-2'
                  alt=''
                />
                <strong className='me-auto'>Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>
                Woohoo, you're reading this text in a Toast!
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </Col>
      </div>
    </div>
  );
};

export default JobCards;
