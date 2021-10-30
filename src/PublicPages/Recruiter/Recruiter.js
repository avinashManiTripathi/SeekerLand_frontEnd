import React from 'react';
import Filter from '../../Layout/SideBar/Filter';
import SideBar from '../../Layout/SideBar/SideBar';
import { JobsInTopLocations, QuickLink } from '../../SiideBarJSON';
import './recruiter.css';

const Recruiter = (props) => {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div
          className='col-md-3 '
          style={{
            marginTop: '60px',
          }}>
          <Filter />
        </div>
        <div
          className='col-md-9 '
          style={{
            marginTop: '50px',
          }}>
          <div className='row'>
            <div className='col-md-4 col-6'>
              <div class='profile-card '>
                <div class='profile-image text-center'>
                  <img
                    src='https://i.imgur.com/RrKeDv8.jpg'
                    class='img-fluid rounded-circle img-thumbnail'
                    alt=''
                  />
                </div>
                <div class='text-center profile-card-details  '>
                  <h3 class=''>Maria samantha</h3>
                  <span>California, USA</span>
                  <span>
                    Software developer and <br /> Java Architect
                  </span>
                  <span>java , php, spring , jpa</span>
                  <div class=''>
                    <button class='btn msg-button'>Message</button>
                    <button class='btn msg-button'>View Profile</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-6 '>
              <div class='profile-card'>
                <div class='profile-image text-center'>
                  <img
                    src='https://i.imgur.com/RrKeDv8.jpg'
                    class='img-fluid rounded-circle img-thumbnail'
                    alt=''
                  />
                </div>
                <div class='text-center profile-card-details  '>
                  <h3 class=''>Maria samantha</h3>
                  <span>California, USA</span>
                  <span>
                    Software developer and <br /> Java Architect
                  </span>
                  <span>java , php, spring , jpa</span>
                  <div class=''>
                    <button class='btn msg-button'>Message</button>
                    <button class='btn msg-button'>View Profile</button>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div className='col-md-4 col-6'>
              <div class='profile-card '>
                <div class='profile-image text-center'>
                  <img
                    src='https://i.imgur.com/RrKeDv8.jpg'
                    class='img-fluid rounded-circle img-thumbnail'
                    alt=''
                  />
                </div>
                <div class='  text-center profile-card-details  '>
                  <h3 class=''>Maria samantha</h3>
                  <span>California, USA</span>
                  <span>
                    Software developer and <br /> Java Architect
                  </span>
                  <span>java , php, spring , jpa</span>
                  <div class=''>
                    <button class='btn msg-button'>Message</button>
                    <button class='btn msg-button'>View Profile</button>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div className='col-md-4 col-6'>
              <div class='profile-card '>
                <div class='profile-image text-center'>
                  <img
                    src='https://i.imgur.com/RrKeDv8.jpg'
                    class='img-fluid rounded-circle img-thumbnail'
                    alt=''
                  />
                </div>
                <div class='text-center profile-card-details  '>
                  <h3 class=''>Maria samantha</h3>
                  <span>California, USA</span>
                  <span>
                    Software developer and <br /> Java Architect
                  </span>
                  <span>java , php, spring , jpa</span>
                  <div class=''>
                    <button class='btn msg-button'>Message</button>
                    <button class='btn msg-button'>View Profile</button>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div className='col-md-4 col-6'>
              <div class='profile-card '>
                <div class='profile-image text-center'>
                  <img
                    src='https://i.imgur.com/RrKeDv8.jpg'
                    class='img-fluid rounded-circle img-thumbnail'
                    alt=''
                  />
                </div>
                <div class='text-center profile-card-details  '>
                  <h3 class=''>Maria samantha</h3>
                  <span>California, USA</span>
                  <span>
                    Software developer and <br /> Java Architect
                  </span>
                  <span>java , php, spring , jpa</span>
                  <div class=''>
                    <button class='btn msg-button'>Message</button>
                    <button class='btn msg-button'>View Profile</button>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div className='col-md-4 col-6'>
              <div class='profile-card '>
                <div class='profile-image text-center'>
                  <img
                    src='https://i.imgur.com/RrKeDv8.jpg'
                    class='img-fluid rounded-circle img-thumbnail'
                    alt=''
                  />
                </div>
                <div class='text-center profile-card-details  '>
                  <h3 class=''>Maria samantha</h3>
                  <span>California, USA</span>
                  <span>
                    Software developer and <br /> Java Architect
                  </span>
                  <span>java , php, spring , jpa</span>
                  <div class=''>
                    <button class='btn msg-button'>Message</button>
                    <button class='btn msg-button'>View Profile</button>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div className='col-md-4 col-6'>
              <div class='profile-card '>
                <div class='profile-image text-center'>
                  <img
                    src='https://i.imgur.com/RrKeDv8.jpg'
                    class='img-fluid rounded-circle img-thumbnail'
                    alt=''
                  />
                </div>
                <div class='text-center profile-card-details  '>
                  <h3 class=''>Maria samantha</h3>
                  <span>California, USA</span>
                  <span>
                    Software developer and <br /> Java Architect
                  </span>
                  <span>java , php, spring , jpa</span>
                  <div class=''>
                    <button class='btn msg-button'>Message</button>
                    <button class='btn msg-button'>View Profile</button>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div className='col-md-4 col-6'>
              <div class='profile-card '>
                <div class='profile-image text-center'>
                  <img
                    src='https://i.imgur.com/RrKeDv8.jpg'
                    class='img-fluid rounded-circle img-thumbnail'
                    alt=''
                  />
                </div>
                <div class='text-center profile-card-details '>
                  <h3 class=''>Maria samantha</h3>
                  <span>California, USA</span>
                  <span>
                    Software developer and <br /> Java Architect
                  </span>
                  <span>java , php, spring , jpa</span>
                  <div class=''>
                    <button class='btn msg-button'>Message</button>
                    <button class='btn msg-button'>View Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiter;
