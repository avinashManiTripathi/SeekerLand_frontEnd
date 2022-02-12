import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

export const TopSideBarJobs = (props) => {
  return (
    <div className='justify-content-center'>
      <div className='col-md-12 shadow bg-white  d-flex align-items-stretch mb-3'>
        <div className=' card  border-0 py-2'>
          <div className='card-header bg-white border-0 mb-0'>
            <div className='row justify-content-between'>
              <div className='col-auto col-sm-auto'>
                <h4>
                  {' '}
                  <span
                    style={{
                      color: 'white',
                      padding: '5px',
                      fontSize: '13px',
                      background: 'blue',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                    }}>
                    hourly
                  </span>
                </h4>
              </div>
              <div className='col-auto col-sm-auto'>
                <div className=' pt-2'>
                  <h5 style={{ fontSize: '13px' }}>$ 55/hr</h5>
                </div>
              </div>
            </div>
          </div>
          <div className=' card-body text-center pb-0 mt-0 pt-3'>
            <div>
              <h5
                className='card-title mb-0 font-weight-bold'
                style={{ margin: '20px 0px', fontSize: '15px' }}>
                UI/UX Designer
              </h5>{' '}
              <small
                style={{
                  color: 'black',
                  fontSize: '14px',
                }}>
                {' '}
                Speckyfox Technologies
              </small>
            </div>
            <div className='d-inline-flex row mb-3 '>
              <div className='col-md-auto'>
                <ul className='list-inline my-0'>
                  <li className='list-inline-item'>
                    {' '}
                    <span className='badge badge-pill badge-outline '>UI</span>
                  </li>
                  <li className='list-inline-item'>
                    {' '}
                    <span className='badge badge-pill badge-outline '>UX</span>
                  </li>
                  <li className='list-inline-item'>
                    {' '}
                    <span className='badge badge-pill badge-outline '>
                      photoshop
                    </span>
                  </li>
                  <li className='list-inline-item '>
                    {' '}
                    <button
                      className='badge btn btn-danger badge-pill badge-primary'
                      type='button'>
                      +4
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='d-flex row mb-0'>
              <div className='col '>
                <p className='sidebar-job-listing-desc'>
                  {' '}
                  We are looking for an experience UI and UX designer to work on
                  our projects...{' '}
                </p>
              </div>
            </div>
          </div>
          <div>
            <hr className='hl'></hr>
          </div>
          <div className='card-footer border-0 text-center mx-auto '>
            <button className='btn btn-danger'>View Job</button>
          </div>
        </div>
      </div>
      <div className='col-md-12 shadow bg-white  d-flex align-items-stretch mb-3'>
        <div className=' card  border-0 py-2'>
          <div className='card-header bg-white border-0 mb-0'>
            <div className='row justify-content-between bg-white'>
              <div className='col-auto col-sm-auto'>
                <h4>
                  {' '}
                  <span
                    style={{
                      color: 'white',
                      padding: '5px',
                      fontSize: '13px',
                      background: 'yellow',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                    }}>
                    Part Time
                  </span>
                </h4>
              </div>
              <div className='col-auto col-sm-auto '>
                <div className=' pt-2'>
                  <h5 style={{ fontSize: '13px' }}>$ 55/hr</h5>
                </div>
              </div>
            </div>
          </div>
          <div className=' card-body text-center pb-0 mt-0 pt-3'>
            <div className='d-block'>
              <h5
                className='card-title mb-0 font-weight-bold'
                style={{ fontSize: '15px' }}>
                UI/UX Designer
              </h5>{' '}
              <small className='text-info my-1'>
                {' '}
                <i className='fa fa-file-code-o small'></i>Just For Pay
              </small>
            </div>
            <div className='d-inline-flex row mb-3 '>
              <div className='col-md-auto'>
                <ul className='list-inline my-0'>
                  <li className='list-inline-item'>
                    {' '}
                    <span className='badge badge-pill badge-outline '>UI</span>
                  </li>
                  <li className='list-inline-item'>
                    {' '}
                    <span className='badge badge-pill badge-outline '>UX</span>
                  </li>
                  <li className='list-inline-item'>
                    {' '}
                    <span className='badge badge-pill badge-outline '>
                      photoshop
                    </span>
                  </li>
                  <li className='list-inline-item '>
                    {' '}
                    <button
                      className='badge btn btn-danger badge-pill badge-primary'
                      type='button'>
                      +4
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='d-flex row mb-0'>
              <div className='col '>
                <p className='sidebar-job-listing-desc'>
                  {' '}
                  We are looking for an experience UI and UX designer to work on
                  our projects...{' '}
                </p>
              </div>
            </div>
          </div>
          <div>
            <hr className='hl'></hr>
          </div>
          <div className='card-footer border-0 text-center mx-auto '>
            <button className='btn btn-danger'>View Job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TopSideBarMenu = (props) => {
  return (
    <div className=' d-flex justify-content-center mb-2  '>
      <div
        className='card'
        style={{
          background: '#2c3b5a',
          color: ' #f9f9f9',
          padding: '20px',
          borderRadius: '0px',
        }}>
        <h5 className='pb-2 border-bottom'>Top Agwate Service</h5>

        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center'>
            <div className='card insert ml-3 mb-3 container'>
              {' '}
              <img
                src='https://img.icons8.com/dotty/128/000000/2012.png'
                className='center'
                alt='seekerland'
              />{' '}
              <span>Calender</span>
              <p>March,Wednesday</p>
              <p>3 Events</p>
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <div className='card insert mr-3 mb-3 container'>
              {' '}
              <img
                src='https://img.icons8.com/color/128/000000/grocery-bag.png'
                className='center'
                alt='seekerland'
              />{' '}
              <span>USA JOBS</span>
              <p>Java,Php</p>
              <p>4 Items</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center'>
            <div className='card insert ml-3 mb-3 container'>
              {' '}
              <img
                src='https://img.icons8.com/bubbles/128/000000/user-location.png'
                className='center'
                alt='seekerland'
              />{' '}
              <span>Location</span>
              <p>Lucy mao going to office</p>
              <p className='opaque'>o</p>
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <div className='card insert mr-3 mb-3 container'>
              {' '}
              <img
                src='https://img.icons8.com/fluent/128/000000/alarm.png'
                className='center'
                alt='seekerland'
              />{' '}
              <span>Activity</span>
              <p>Rose favourited your post</p>
              <p className='opaque'>o</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center'>
            <div className='card insert ml-3 mb-3 container'>
              {' '}
              <img
                src='https://img.icons8.com/dusk/128/000000/checklist.png'
                className='center'
                alt='seekerland'
              />{' '}
              <span>To do</span>
              <p>Homework,Design</p>
              <p>4 Items</p>
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <div className='card insert mr-3 mb-3 container'>
              {' '}
              <img
                src='https://img.icons8.com/fluent/128/000000/settings.png'
                className='center'
                alt='seekerland'
              />{' '}
              <span>Settings</span>
              <p>Homework,Design</p>
              <p>4 Items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SideBar = (props) => {
  const { data, skills } = props;
  return (
    <div className='quick-links-wrapper bg-white p-2'>
      <h2>{data.title ? data.title : props.title} </h2>

      <div className='quick-links-inner'>
        {data &&
          data.links &&
          data.links.map((links) => {
            return (
              <p key={links.id}>
                <Link to='' className='quick-links-inner-links'>
                  {links.name}
                </Link>
              </p>
            );
          })}

        {data &&
          data.india_city &&
          data.india_city.map((links) => {
            return (
              <p key={links.id}>
                <Link
                  to={
                    skills +
                    `${skills ? '-' : ''}jobs-in-` +
                    links.name.toLowerCase()
                  }
                  className='quick-links-inner-links'>
                  {skills} Jobs In {links.name}
                </Link>
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default SideBar;
