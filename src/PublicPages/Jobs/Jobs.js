import React, { useState } from 'react';
import JobCards from '../../Component/JobCards';
import Search from '../../Component/Search';
import { Spinner, Button, Form } from 'react-bootstrap';
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
  const [state, setState] = useState({
    buttonLoader: false,
  });

  const handleSearch = () => {
    setState({
      buttonLoader: true,
    });
  };

  return (
    <div className='wrapper'>
      <div>
        <div
          className='bg-white'
          style={{
            padding: '10px 30px 5px 30px ',
            borderBottom: '1px solid #c5c5c5',
            borderTop: '1px solid #c5c5c5',
          }}>
          <div className='row'>
            <div className='col-md-6 d-flex'>
              <input
                type='text'
                placeholder='Keyword e.g(Job Title , Description , Tags)'
                className='form-control'></input>
              <Button
                className=' br-0 form-btn btn btn-danger'
                style={{ width: '20%' }}
                onClick={handleSearch}>
                {state.buttonLoader ? (
                  <>
                    Search{' '}
                    <Spinner
                      as='span'
                      animation='border'
                      size='sm'
                      role='status'
                      aria-hidden='true'
                    />
                  </>
                ) : (
                  <>
                    Search <i className='fa fa-search' />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row '>
          <div className='col-md-3 mt-4'>
            <Filter />
            <TopSideBarMenu />
          </div>
          <div className='col-md-7 mt-4'>
            <div
              className='d-flex bg-white '
              style={{
                margin: '0px 0px 10px 0px ',
                padding: '5px ',
              }}>
              <div className='col-md-6'>
                <div className='text-muted m-2' id='res'>
                  1444 Java Jobs in Noida
                </div>
              </div>
              <div className='col-md-6'>
                <div className='d-flex justify-content-end '>
                  <div id='sorting' className='d-flex'>
                    <span className='text-muted m-2'>SortBy</span>
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
          <div className='col-md-2 mt-4'>
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
