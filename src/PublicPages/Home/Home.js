import React, { useEffect, useState } from 'react';
import { Spinner, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
// import CardSlider from '../../Component/CardSlider';
import CarouselSlider from '../../Component/Carousel';
import Clock from '../../Component/Clock';
import TabsComponent from '../../Component/TabsComponent';
import { FindJobVacanciesBy } from '../../FindJobVacanciesBy';
import { jobsData } from '../../jobsJSON';
// import companies from '../../Companies.json';

import SideBar, {
  // TopSideBarJobs,
  TopSideBarMenu,
} from '../../Layout/SideBar/SideBar';
// import Slider from '../../Layout/Slider/Slider';
// import { PeopleAlsoConsider } from '../../PeopleAlsoConsider';
import {
  JobsbyCategory,
  JobsInTopLocations,
  QuickLink,
} from '../../SiideBarJSON';
// import { StateName } from '../../StateName';
import './Home.css';

const Home = (props) => {
  const [state, setState] = useState({
    buttonLoader: false,
    stateName: '',
    keyword: '',
    city: '',
    countryState: '',
  });
  const [countryState, setCountryState] = useState();
  const [city, setCity] = useState();
  const [keyword, setKeyword] = useState();

  // const handleSearch = () => {
  //   setState({
  //     buttonLoader: true,
  //   });
  // };

  const history = useHistory();

  // const HandleStateName = (state) => {
  //   const stateData = StateName.states.filter((element) => {
  //     if (element.state === state) {
  //       return element.districts;
  //     }
  //   });
  //   setState({
  //     stateName: stateData,
  //   });
  // };

  const onSubmitSearch = () => {
    history.push(`/${keyword.value}-jobs-in-${city.value}`);
  };

  const keywordOptions = [
    { value: 'java', label: 'java' },
    { value: 'php', label: 'php' },
    { value: 'spring', label: 'spring' },
    { value: 'laravel', label: 'laravel' },
    { value: 'salesforce', label: 'salesforce' },
    { value: 'react js', label: 'react js' },
    { value: 'c#', label: 'c#' },
    { value: 'dotnet', label: 'dotnet' },
    { value: 'struts', label: 'struts' },
    { value: 'manager', label: 'manager' },
    { value: 'frontend', label: 'frontend' },
    { value: 'nodejs', label: 'node js' },
  ];

  const cityOptions = [
    { value: 'Noida', label: 'Noida' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Gururgram', label: 'Gurugram' },
  ];
  const StateOptions = [
    { value: 'UP', label: 'Uttar Pradesh' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Goa', label: 'Goa' },
  ];

  useEffect(() => {
    // HandleStateName('Arunachal Pradesh');
    setState({});
  }, []);

  return (
    <div className='wrapper'>
      <div className='job-search-wrapper'>
        <div className='container '>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
                <div className='job-search-inner-wrapper'>
                  <h2>
                    <span>3,000+ </span> Browse Jobs
                  </h2>
                  <p>
                    Find Jobs, Employment & Career Opportunities , It's Your
                    Time To Get a Job
                  </p>

                  <div className='job-search-container'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <Select
                          options={keywordOptions}
                          className='form-select-dropdown'
                          classNamePrefix='form-control-menu'
                          placeholder='Keyword e.g(java ,php)'
                          isSearchable
                          isMulti
                          value={keyword}
                          onChange={(keyword) => setKeyword(keyword)}
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                              ...theme.colors,
                              primary25: 'blue',
                              primary: 'black',
                            },
                          })}
                        />
                      </div>
                      <div className='col-md-3'>
                        <Select
                          options={StateOptions}
                          className='form-select-dropdown'
                          classNamePrefix='form-control-menu'
                          placeholder='Select State  ....'
                          isSearchable
                          value={countryState}
                          isMulti
                          onChange={(countryState) =>
                            setCountryState(countryState)
                          }
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                              ...theme.colors,
                              primary25: '',
                              primary: 'black',
                            },
                          })}
                        />
                      </div>
                      <div className='col-md-3'>
                        <Select
                          options={cityOptions}
                          className='form-select-dropdown'
                          classNamePrefix='form-control-menu'
                          placeholder='Select City ....'
                          isSearchable
                          isMulti
                          onChange={(city) => setCity(city)}
                          value={city}
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                              ...theme.colors,
                              primary25: '',
                              primary: 'black',
                            },
                          })}
                        />
                      </div>
                      <div className='col-md-2'>
                        <Button
                          className=' br-0 form-btn btn btn-danger'
                          onClick={onSubmitSearch}>
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
              <div className='col-md-4'>
                <div className='col-md-8'></div>
                <div className='col-md-4' style={{}}>
                  <Clock />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5 '>
        <div className='m-4'>
          <div className='row'>
            <div className='col-md-9'>
              <div className='top-companies-card mb-5 bg-white  '>
                <CarouselSlider title='Top Companies' slidesToShow={4}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <div className='carousel-card-slider '>
                      <img
                        src='http://www.webstrot.com/html/jobpro/job_dark/images/content/hiring_img2.png'
                        alt=''></img>
                      <h2>SpeackyFox India Pvt Ltd</h2>
                      <p>( Noida ) </p>
                      <p>Openings : 4</p>
                    </div>
                  </div>
                  <div>
                    <div className='carousel-card-slider '>
                      <img
                        src='http://www.webstrot.com/html/jobpro/job_dark/images/content/hiring_img2.png'
                        alt=''></img>
                      <h2>SpeackyFox India Pvt Ltd</h2>
                      <p>( Noida ) </p>
                      <p>Openings : 4</p>
                    </div>
                  </div>
                  <div>
                    <div className='carousel-card-slider '>
                      <img
                        src='http://www.webstrot.com/html/jobpro/job_dark/images/content/hiring_img2.png'
                        alt=''></img>
                      <h2>SpeackyFox India Pvt Ltd</h2>
                      <p>( Noida ) </p>
                      <p>Openings : 4</p>
                    </div>
                  </div>
                  <div>
                    <div className='carousel-card-slider '>
                      <img
                        src='http://www.webstrot.com/html/jobpro/job_dark/images/content/hiring_img2.png'
                        alt=''></img>
                      <h2>SpeackyFox India Pvt Ltd</h2>
                      <p>( Noida ) </p>
                      <p>Openings : 4</p>
                    </div>
                  </div>
                  <div>
                    <div className='carousel-card-slider '>
                      <img
                        src='http://www.webstrot.com/html/jobpro/job_dark/images/content/hiring_img2.png'
                        alt=''></img>
                      <h2>SpeackyFox India Pvt Ltd</h2>
                      <p>( Noida ) </p>
                      <p>Openings : 4</p>
                    </div>
                  </div>
                  <div>
                    <div className='carousel-card-slider '>
                      <img
                        src='http://www.webstrot.com/html/jobpro/job_dark/images/content/hiring_img2.png'
                        alt=''></img>
                      <h2>SpeackyFox India Pvt Ltd</h2>
                      <p>( Noida ) </p>
                      <p>Openings : 4</p>
                    </div>
                  </div>
                  <div>
                    <div className='carousel-card-slider '>
                      <img
                        src='http://www.webstrot.com/html/jobpro/job_dark/images/content/hiring_img2.png'
                        alt=''></img>
                      <h2>SpeackyFox India Pvt Ltd</h2>
                      <p>( Noida ) </p>
                      <p>Openings : 4</p>
                    </div>
                  </div>
                  <div>
                    <div className='carousel-card-slider '>
                      <img
                        src='http://www.webstrot.com/html/jobpro/job_dark/images/content/hiring_img2.png'
                        alt=''></img>
                      <h2>SpeackyFox India Pvt Ltd</h2>
                      <p>( Noida ) </p>
                      <p>Openings : 4</p>
                    </div>
                  </div>
                </CarouselSlider>
              </div>

              <div className=' top-companies-card mb-5 bg-white  '>
                <CarouselSlider data={jobsData} title='Work From Home'>
                  {jobsData &&
                    jobsData.map((data) => {
                      return (
                        <div key={data.id}>
                          <div
                            className='carousel-card-slider'
                            style={{ height: '150px' }}>
                            <h2>{data.title} </h2>
                            <h3>SpeckyFox Technologies</h3>
                            <p>3 - 4 Years</p>
                            <p>Java Hibernate SpringDataJpa </p>
                          </div>
                        </div>
                      );
                    })}
                </CarouselSlider>
              </div>

              <div className='top-companies-card mb-5 bg-white '>
                <CarouselSlider data={jobsData} title='Recent Jobs'>
                  {jobsData &&
                    jobsData.map((data) => {
                      return (
                        <div key={data.id}>
                          <div
                            className='carousel-card-slider'
                            style={{ height: '150px' }}>
                            <h2>{data.title} </h2>
                            <h3>SpeckyFox Technologies</h3>
                            <p>3 - 4 Years</p>
                            <p>Java Hibernate SpringDataJpa </p>
                          </div>
                        </div>
                      );
                    })}
                </CarouselSlider>
              </div>

              <div className='top-companies-card mb-5 bg-white  '>
                <h2 className='card-title mt-1'>Find Job Vacancies by</h2>
                <TabsComponent data={FindJobVacanciesBy} />
              </div>

              {/* <JobCards data={jobsData} /> */}
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
    </div>
  );
};

Home.propTypes = {};

export default Home;
