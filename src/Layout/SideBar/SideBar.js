import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

export const TopSideBarJobs = (props) => {
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
    <div className='quick-links-wrapper bg-white shadow p-2'>
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
