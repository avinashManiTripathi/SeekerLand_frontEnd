import React, { useState } from 'react';
import { Spinner, Button, Form } from 'react-bootstrap';
import CardSlider from '../../Component/CardSlider';
import JobCards from '../../Component/JobCards';
import TabsComponent from '../../Component/TabsComponent';
import { FindJobVacanciesBy } from '../../FindJobVacanciesBy';
import { jobsData } from '../../jobsJSON';

import SideBar, {
  // TopSideBarJobs,
  TopSideBarMenu,
} from '../../Layout/SideBar/SideBar';
import Slider from '../../Layout/Slider/Slider';
// import { PeopleAlsoConsider } from '../../PeopleAlsoConsider';
import {
  JobsbyCategory,
  JobsInTopLocations,
  QuickLink,
} from '../../SiideBarJSON';
import './Home.css';

const Home = (props) => {
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
      <div className='job-search-wrapper'>
        <div className='container  '>
          <div className='job-search-inner-wrapper'>
            <h2>
              <span>3,000+ </span> Browse Jobs
            </h2>
            <p>Find Jobs, Employment & Career Opportunities</p>

            <div className='job-search-container bg-white'>
              <div className='row'>
                <div className='col-md-4'>
                  <input
                    type='text'
                    placeholder='Keyword e.g(Job Title , Description , Tags)'
                    className='form-control'></input>
                </div>
                <div className='col-md-3'>
                  <Form.Select
                    className='form-control'
                    aria-label='Select Locations'>
                    <option>Select Locations</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </Form.Select>
                </div>
                <div className='col-md-3'>
                  <Form.Select
                    className='form-control'
                    aria-label='Select Experience'>
                    <option>Select Experience</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </Form.Select>
                </div>
                <div className='col-md-2'>
                  <Button
                    className=' br-0 form-btn btn btn-danger'
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
            <div className='trending-keywords-container'>
              <span className='title'>Trending Keywords :</span>
              <span className='trending-keywords'>
                <span>ui designer </span>
                <span>developer </span> <span>seniorit company</span>
                <span>design,call center</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5 '>
        <div className='row'>
          <div className='col-md-9'>
            <div className='top-companies-card mb-5 bg-white white-shadow  '>
              <h2 className='card-title'>Top Hiring Companies</h2>
              <Slider />
            </div>

            <div className='top-companies-card mb-5 bg-white white-shadow  '>
              <h2 className='card-title'>Recent Jobs</h2>
              <CardSlider data={jobsData} />
            </div>

            <div className='top-companies-card mb-5 bg-white white-shadow  '>
              <h2 className='card-title'>Recent Jobs</h2>
              <TabsComponent data={FindJobVacanciesBy} />
            </div>

            <JobCards data={jobsData} />
          </div>
          <div className='col-md-3'>
            <TopSideBarMenu />
            <SideBar data={QuickLink} />
            <SideBar data={JobsbyCategory} />
            <SideBar data={JobsInTopLocations} />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
