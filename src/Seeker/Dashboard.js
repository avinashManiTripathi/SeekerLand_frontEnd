import React from 'react';
import './index.css';
import { Switch, Route, Link } from 'react-router-dom';
import AppliedJobs from './AppliedJobs';
import UserProfile from './UserProfile';
import SavedJobs from './SavedJobs';
import { ProgressBar } from 'react-bootstrap';
const DashBoard = ({ match, location, history }) => {
  return (
    <>
      <div className=' border-bottom bg-white dashboard-profile  pt-md-3 pt-4 container'>
        <div className='d-flex flex-md-row justify-content-around align-items-center'>
          <div className='d-flex'>
            <div className='d-flex'>
              <div className='p-md-2'>
                {' '}
                <img
                  src='https://media-exp1.licdn.com/dms/image/C5103AQFed6_BRhOgyg/profile-displayphoto-shrink_200_200/0/1526668638838?e=1645660800&v=beta&t=nIFGcQHdymuScc0hWr5_wwoavdRBMdPol5vg_XUr5KA'
                  alt=''
                  className='rounded-circle'
                  id='profile'
                />
              </div>
              <div className='p-md-2 p-1' id='info'>
                <h5>Avinash Mani Tripathi</h5>
                <div className='text-muted'>
                  Software Engineer at Speckyfox Pvt Ltd
                  <div> avinash@agwate.com</div>
                  <div>+91 6393177038</div>
                </div>
                <div className='mt-3 '>
                  <ProgressBar
                    animated
                    striped
                    className='mb-2'
                    now='80'
                    label='80%'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=' p-lg-2 p-1' id='blue-background'>
            <div className='d-flex flex-md-row align-items-center'>
              <div
                className='d-flex flex-column align-items-center px-lg-3 px-md-2 px-1'
                id='border-right'>
                <p className='h4'>40</p>
                <div className='text-muted' id='count'>
                  Application
                </div>
              </div>
              <div
                className='d-flex flex-column align-items-center px-lg-3 px-md-2 px-1'
                id='border-right'>
                <p className='h4'>117</p>
                <div className='text-muted' id='count'>
                  Projects
                </div>
              </div>
              <div
                className='d-flex flex-column align-items-center px-lg-3 px-md-2 px-1'
                id='border-right'>
                <p className='h4'>58</p>
                <div className='text-muted' id='count'>
                  Skills
                </div>
              </div>
              <div className='d-flex flex-column align-items-center px-lg-4 px-md-2 px-sm-1 px-2'>
                <p className='h4'>03</p>
                <div className='text-muted' id='count'>
                  Viewed Profile
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pl-lg-5 pt-lg-2 pt-md-1'>
          <ul className='nav nav-tabs' id='myTab' role='tablist'>
            <li className='nav-item' role='presentation'>
              {' '}
              <Link
                className='nav-link '
                id='user-tab'
                to={`${match.path}/my_account`}
                data-toggle='tab'
                role='tab'
                aria-controls='user'
                aria-selected='true'>
                User Profile
              </Link>
            </li>
            <li className='nav-item' role='presentation'>
              <Link
                className='nav-link text-muted'
                data-toggle='tab'
                to={`${match.path}/applied_jobs`}
                role='tab'
                aria-controls='settings'
                aria-selected='false'>
                Recommended Jobs
              </Link>
            </li>
            <li className='nav-item' role='presentation'>
              <Link
                to={`${match.path}/saved_jobs`}
                className='nav-link text-muted'
                data-toggle='tab'
                role='tab'
                aria-controls='access'
                aria-selected='false'>
                Saved Jobs
              </Link>
            </li>
            <li className='nav-item' role='presentation'>
              <Link
                className='nav-link text-muted'
                data-toggle='tab'
                to={`${match.path}/applied_jobs`}
                role='tab'
                aria-controls='settings'
                aria-selected='false'>
                Applied Jobs
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='container'>
        <div className='row '>
          <div className='col-md-4 mt-1'>
            <div className='bg-white border'>
              <div className='d-flex flex-row align-items-center'>
                <div className='d-flex flex-row align-items-center'>
                  <div className='pr-sm-2 p-3 pt-1'>
                    <img
                      src='https://media-exp1.licdn.com/dms/image/C5103AQFed6_BRhOgyg/profile-displayphoto-shrink_200_200/0/1526668638838?e=1645660800&v=beta&t=nIFGcQHdymuScc0hWr5_wwoavdRBMdPol5vg_XUr5KA'
                      alt=''
                      width='50'
                      height='50'
                      className='rounded-circle'
                    />{' '}
                  </div>
                  <div className='d-flex flex-column p-1 col-md-9'>
                    <div>
                      <b>Avinash </b>
                    </div>
                    <div id='small-font'>
                      02 changes has been done 03 years ago
                    </div>
                  </div>
                </div>
                <div className='d-flex flex-column align-items-center px-lg-5 px-md-3 px-sm-5 '>
                  <div>December</div>
                  <div>
                    <h5>19</h5>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-row justify-content-center ml-lg-5 ml-md-4 mt-md-3 mr-md-2 mb-md-2 mx-3'>
                <div className='d-flex flex-column justify-content-center mt-md-3 mt-2 ml-md-0 ml-sm-2'>
                  <div className='pb-2'>
                    <b>Notification</b>
                  </div>
                  <div className='d-flex flex-row align-items-center mt-md-1 p-md-2 rounded border'>
                    <div className='p-1'>
                      <span className='fa fa-shield'></span>
                    </div>
                    <div className='p-1' id='small-font'>
                      Send me reminder of my password expiration
                    </div>
                    <div className='text-success p-1 updated'>Updated</div>
                  </div>

                  <div className='d-flex flex-row align-items-center mt-md-1 p-md-2 rounded border'>
                    <div className='p-1'>
                      <span className='fa fa-shield'></span>
                    </div>
                    <div className='p-1' id='small-font'>
                      Added 4 new Key Skills
                    </div>
                    <div className='text-success p-1 updated'>Updated</div>
                  </div>
                  <div className='d-flex flex-row align-items-center mt-md-1 p-md-2 rounded border'>
                    <div className='p-1'>
                      <span className='fa fa-shield'></span>
                    </div>
                    <div className='p-1' id='small-font'>
                      Applied 6 Latest Jobs In Noida
                    </div>
                    <div className='text-success p-1 updated'>Updated</div>
                  </div>
                  <div className='pb-2 pt-2'>
                    <b>Trouble signing in</b>
                  </div>
                  <div className='d-flex flex-row align-items-center mt-md-1 p-md-2 rounded border'>
                    <div className='p-1'>
                      <span className='fa fa-shield'></span>
                    </div>
                    <div className='p-1' id='small-font'>
                      I need to reset security question
                    </div>
                    <div className='text-success p-1 ml-auto'>Updated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <Switch>
              <Route exact path={`${match.path}`} component={UserProfile} />
              <Route
                exact
                path={`${match.path}/my_account`}
                component={UserProfile}
              />
              <Route
                path={`${match.path}/applied_jobs`}
                component={AppliedJobs}
              />
              <Route path={`${match.path}/saved_jobs`} component={SavedJobs} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
