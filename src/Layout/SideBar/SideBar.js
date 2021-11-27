import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

export const TopSideBarJobs = (props) => {
  return (
    <div class='justify-content-center'>
      <div class='col-md-12 shadow bg-white  d-flex align-items-stretch mb-3'>
        <div class=' card  border-0 py-2'>
          <div class='card-header bg-white border-0 mb-0'>
            <div class='row justify-content-between'>
              <div class='col-auto col-sm-auto'>
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
              <div class='col-auto col-sm-auto'>
                <div class=' pt-2'>
                  <h5 style={{ fontSize: '13px' }}>$ 55/hr</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=' card-body text-center pb-0 mt-0 pt-3'>
            <div>
              <h5
                class='card-title mb-0 font-weight-bold'
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
            <div class='d-inline-flex row mb-3 '>
              <div class='col-md-auto'>
                <ul class='list-inline my-0'>
                  <li class='list-inline-item'>
                    {' '}
                    <span class='badge badge-pill badge-outline '>UI</span>
                  </li>
                  <li class='list-inline-item'>
                    {' '}
                    <span class='badge badge-pill badge-outline '>UX</span>
                  </li>
                  <li class='list-inline-item'>
                    {' '}
                    <span class='badge badge-pill badge-outline '>
                      photoshop
                    </span>
                  </li>
                  <li class='list-inline-item '>
                    {' '}
                    <button
                      class='badge btn btn-danger badge-pill badge-primary'
                      type='button'>
                      +4
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class='d-flex row mb-0'>
              <div class='col '>
                <p class='sidebar-job-listing-desc'>
                  {' '}
                  We are looking for an experience UI and UX designer to work on
                  our projects...{' '}
                </p>
              </div>
            </div>
          </div>
          <div>
            <hr class='hl'></hr>
          </div>
          <div class='card-footer border-0 text-center mx-auto '>
            <button className='btn btn-danger'>View Job</button>
          </div>
        </div>
      </div>
      <div class='col-md-12 shadow bg-white  d-flex align-items-stretch mb-3'>
        <div class=' card  border-0 py-2'>
          <div class='card-header bg-white border-0 mb-0'>
            <div class='row justify-content-between bg-white'>
              <div class='col-auto col-sm-auto'>
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
              <div class='col-auto col-sm-auto '>
                <div class=' pt-2'>
                  <h5 style={{ fontSize: '13px' }}>$ 55/hr</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=' card-body text-center pb-0 mt-0 pt-3'>
            <div class='d-block'>
              <h5
                class='card-title mb-0 font-weight-bold'
                style={{ fontSize: '15px' }}>
                UI/UX Designer
              </h5>{' '}
              <small class='text-info my-1'>
                {' '}
                <i class='fa fa-file-code-o small'></i>Just For Pay
              </small>
            </div>
            <div class='d-inline-flex row mb-3 '>
              <div class='col-md-auto'>
                <ul class='list-inline my-0'>
                  <li class='list-inline-item'>
                    {' '}
                    <span class='badge badge-pill badge-outline '>UI</span>
                  </li>
                  <li class='list-inline-item'>
                    {' '}
                    <span class='badge badge-pill badge-outline '>UX</span>
                  </li>
                  <li class='list-inline-item'>
                    {' '}
                    <span class='badge badge-pill badge-outline '>
                      photoshop
                    </span>
                  </li>
                  <li class='list-inline-item '>
                    {' '}
                    <button
                      class='badge btn btn-danger badge-pill badge-primary'
                      type='button'>
                      +4
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class='d-flex row mb-0'>
              <div class='col '>
                <p className='sidebar-job-listing-desc'>
                  {' '}
                  We are looking for an experience UI and UX designer to work on
                  our projects...{' '}
                </p>
              </div>
            </div>
          </div>
          <div>
            <hr class='hl'></hr>
          </div>
          <div class='card-footer border-0 text-center mx-auto '>
            <button className='btn btn-danger'>View Job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TopSideBarMenu = (props) => {
  return (
    <div class=' d-flex justify-content-center mb-2  '>
      <div
        class='card'
        style={{
          background: '#2c3b5a',
          color: ' #f9f9f9',
          padding: '20px',
          borderRadius: '0px',
        }}>
        <h5 class='pb-2 border-bottom'>Top Agwate Service</h5>

        <div class='row'>
          <div class='col-md-6 d-flex justify-content-center'>
            <div class='card insert ml-3 mb-3 container'>
              {' '}
              <img
                src='https://img.icons8.com/dotty/128/000000/2012.png'
                class='center'
                alt='seekerland'
              />{' '}
              <span>Calender</span>
              <p>March,Wednesday</p>
              <p>3 Events</p>
            </div>
          </div>
          <div class='col-md-6 d-flex justify-content-center'>
            <div class='card insert mr-3 mb-3 container'>
              {' '}
              <img
                src='https://img.icons8.com/color/128/000000/grocery-bag.png'
                class='center'
                alt='seekerland'
              />{' '}
              <span>USA JOBS</span>
              <p>Java,Php</p>
              <p>4 Items</p>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-6 d-flex justify-content-center'>
            <div class='card insert ml-3 mb-3 container'>
              {' '}
              <img
                src='https://img.icons8.com/bubbles/128/000000/user-location.png'
                class='center'
                alt='seekerland'
              />{' '}
              <span>Location</span>
              <p>Lucy mao going to office</p>
              <p class='opaque'>o</p>
            </div>
          </div>
          <div class='col-md-6 d-flex justify-content-center'>
            <div class='card insert mr-3 mb-3 container'>
              {' '}
              <img
                src='https://img.icons8.com/fluent/128/000000/alarm.png'
                class='center'
                alt='seekerland'
              />{' '}
              <span>Activity</span>
              <p>Rose favourited your post</p>
              <p class='opaque'>o</p>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-6 d-flex justify-content-center'>
            <div class='card insert ml-3 mb-3 container'>
              {' '}
              <img
                src='https://img.icons8.com/dusk/128/000000/checklist.png'
                class='center'
                alt='seekerland'
              />{' '}
              <span>To do</span>
              <p>Homework,Design</p>
              <p>4 Items</p>
            </div>
          </div>
          <div class='col-md-6 d-flex justify-content-center'>
            <div class='card insert mr-3 mb-3 container'>
              {' '}
              <img
                src='https://img.icons8.com/fluent/128/000000/settings.png'
                class='center'
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

const SideBar = ({ data }) => {
  return (
    <div className='quick-links-wrapper bg-white p-2'>
      <h2>{data.title}</h2>
      <div className='quick-links-inner'>
        {data &&
          data.links.map((links) => {
            return (
              <p key={links.id}>
                <Link to='#' className='quick-links-inner-links'>
                  {links.name}
                </Link>
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default SideBar;
