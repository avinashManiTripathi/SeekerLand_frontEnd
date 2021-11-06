import React from 'react';
import JobCards from '../../Component/JobCards';
import Search from '../../Component/Search';
import TabsComponent from '../../Component/TabsComponent';
import { jobsData } from '../../jobsJSON';
import Filter from '../../Layout/SideBar/Filter';

import SideBar, {
  TopSideBarJobs,
  TopSideBarMenu,
} from '../../Layout/SideBar/SideBar';
import { PeopleAlsoConsider } from '../../PeopleAlsoConsider';

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
            <TopSideBarMenu />
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

            <div className='tabs-wrapper mt-4'>
              <h4
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}>
                Apply to 1414 Java Job Vacancies in Noida
              </h4>
              <div className='bg-white shadow p-2 mb-2 mt-2'>
                <TabsComponent data={PeopleAlsoConsider} />
              </div>
            </div>
          </div>
          <div className='col-md-3 mt-4'>
            <SideBar data={JobsInTopLocations} />
            <SideBar data={JobsbyCategory} />
            <SideBar data={QuickLink} />
            <TopSideBarJobs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
