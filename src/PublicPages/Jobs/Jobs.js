import React from 'react';
import JobCards from '../../Component/JobCards';
import Search from '../../Component/Search';
import { jobsData } from '../../jobsJSON';
import Filter from '../../Layout/SideBar/Filter';

import SideBar from '../../Layout/SideBar/SideBar';

import {
  JobsbyCategory,
  JobsInTopLocations,
  QuickLink,
} from '../../SiideBarJSON';
import './jobs.css';

const Jobs = (props) => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div
          style={{
            marginTop: '100px',
          }}>
          <Search />
        </div>

        <div className='row '>
          <div className='col-md-3 mt-4'>
            <Filter />
          </div>
          <div className='col-md-6 mt-4'>
            <div
              class='d-flex shadow bg-white '
              style={{
                margin: '0px 0px 20px 0px ',
                padding: '10px ',
              }}>
              <div className='col-md-6'>
                <div class='text-muted m-2' id='res'>
                  1444 Java Jobs in Noida
                </div>
              </div>
              <div className='col-md-6'>
                <div class='d-flex justify-content-end '>
                  <div id='sorting' class='d-flex'>
                    {' '}
                    <span class='text-muted m-2'>SortBy</span>
                    <select
                      name='sort'
                      id='sort'
                      className='form-control form-select'>
                      <option value='popularity'>Relevance</option>
                      <option value='prcie'>Freshness</option>
                    </select>{' '}
                  </div>
                </div>
              </div>
            </div>
            <JobCards data={jobsData} />
          </div>
          <div className='col-md-3 mt-4'>
            <SideBar data={JobsInTopLocations} />
            <SideBar data={JobsbyCategory} />
            <SideBar data={QuickLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
