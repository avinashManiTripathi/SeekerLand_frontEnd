import React, { useEffect, useState } from 'react';
import JobCards from '../../Component/JobCards';
import { Spinner, Button } from 'react-bootstrap';
import TabsComponent from '../../Component/TabsComponent';
import Filter from '../../Layout/SideBar/Filter';
import SideBar from '../../Layout/SideBar/SideBar';
import { PeopleAlsoConsider } from '../../PeopleAlsoConsider';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { JobsbyCategory, QuickLink, TopTenLocation } from '../../SiideBarJSON';
import './jobs.css';
import { FindSkillsJobsInLocationAction } from '../../Actions/Jobs.action';
import { useHistory, useLocation } from 'react-router-dom';
import { GetUrlFormatValue } from '../../Helper/GetUrlFormatValue';
import { ApplyJobsAction } from '../../Actions/Jobs.action';

const Jobs = (props) => {
  const [keyword, setKeyword] = useState();
  const [update, setUpdate] = useState();
  const [city, setCity] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const { jobs } = useSelector(
    (state) => state.findSkillsJobsInLocationReducer
  );
  const history = useHistory();

  const keywordOptions = [
    { value: 'java', label: 'java' },
    { value: 'php', label: 'php' },
    { value: 'spring', label: 'spring' },
    { value: 'laravel', label: 'laravel' },
    { value: 'salesforce', label: 'salesforce' },
    { value: 'react js', label: 'react js' },
  ];

  const [state, setState] = useState({
    buttonLoader: false,
    JobSkills: '',
    jobLoc: '',
  });

  const handleApplyJob = (id) => {
    dispatch(ApplyJobsAction(id));
    setUpdate(id);
    findJobs();
  };

  const findJobs = () => {
    let [skills, loc] = GetUrlFormatValue(location);
    setState({
      JobSkills: skills,
      jobLoc: loc,
    });

    dispatch(FindSkillsJobsInLocationAction(skills, loc));
  };

  const handleSearch = () => {
    setState({
      buttonLoader: true,
    });

    var query = [];
    keyword.forEach((element) => {
      query.push(element.value);
    });
    var location = [];
    city.forEach((element) => {
      location.push(element.value);
    });

    history.push(`/${query.join('-')}-jobs-in-${location.join('-')}`);
  };

  useEffect(() => {
    const findJobs = () => {
      let [skills, loc] = GetUrlFormatValue(location);
      setState({
        JobSkills: skills,
        jobLoc: loc,
      });

      dispatch(FindSkillsJobsInLocationAction(skills, loc));
    };

    findJobs();
  }, [dispatch, location, update]);

  const cityOptions = [
    { value: 'noida', label: 'Noida' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'gurugram', label: 'Gurugram' },
  ];

  return (
    <div className='wrapper'>
      <div>
        <div
          className='bg-white fixed-top'
          style={{
            top: '69px',
            zIndex: '1',
            padding: '10px 30px 5px 30px ',
            borderBottom: '1px solid #c5c5c5',
            borderTop: '1px solid #c5c5c5',
          }}>
          <div className='row '>
            <div className='col-md-9 d-flex'>
              <div className='col-md-5'>
                <Select
                  options={keywordOptions}
                  className='form-select-dropdown'
                  classNamePrefix='form-control-menu'
                  placeholder='Keyword e.g(Job Title , Description , Tags)'
                  isSearchable
                  isMulti
                  value={keyword}
                  onChange={(keyword) => setKeyword(keyword)}
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
              <div className='col-md-5'>
                <Select
                  options={cityOptions}
                  className='form-select-dropdown'
                  classNamePrefix='form-control-menu'
                  placeholder='City e.g(Noida , Lucknow , Delhi)'
                  isSearchable
                  isMulti
                  value={city}
                  onChange={(city) => setCity(city)}
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
                  style={{
                    width: '100%',
                    marginLeft: '-10px',
                    marginTop: '-5px',
                  }}
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
            <div className='col-md-3'>
              <div className='d-flex justify-content-end '>
                <div id='sorting' className='d-flex'>
                  <span className='m-2' style={{ fontSize: '13px' }}>
                    SortBy
                  </span>
                  <select
                    style={{ fontSize: '13px' }}
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
        </div>
      </div>
      <div
        className='container'
        style={{
          marginTop: '140px',
        }}>
        <div className='row '>
          <div className='col-md-3 mt-2'>
            <Filter />
          </div>
          <div className='col-md-7 mt-2'>
            {/* <h2
              style={{
                fontSize: '14px',
                fontWeight: 'bold',
                textShadow: 'none',
                marginBottom: '10px',
              }}>
              {jobs ? jobs.data.length : null}{' '}
              {state.JobSkills + ' Jobs In ' + state.jobLoc}
            </h2> */}
            <JobCards data={jobs} handleApplyJob={handleApplyJob} />
            <div className='tabs-wrapper mt-4'>
              <h4
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}>
                Apply to 1414 Java Job Vacancies in Noida
              </h4>
              <div className='bg-white p-2 mb-2 mt-2'>
                <TabsComponent data={PeopleAlsoConsider} />
              </div>
            </div>
          </div>
          <div className='col-md-2 mt-2'>
            <SideBar
              data={TopTenLocation}
              title='Jobs In Top Location'
              skills={state.JobSkills}
            />
            <SideBar data={JobsbyCategory} />
            <SideBar data={QuickLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
