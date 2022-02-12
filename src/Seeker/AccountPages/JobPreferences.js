import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {
  JobPreferenceFindBySeekerIdAction,
  JobPreferenceUploadAction,
} from '../../Actions/JobPreference.action';
import FormModel from '../Models/FormModel';

const JobPreferences = (props) => {
  const [showModel, setShowModel] = useState(false);
  const [jobPreferences, setJobPreferences] = useState({
    Industry: 'ggdfgsf',
    Function: 'sdgdfgsg',
    EmploymentType: 'gdfg',
    PreferredLocation: 'gfdgd',
    AvailabilityToJoin: 'sdfgds',
    JobType: 'sdfgd',
    Role: 'dgsfgdf ',
    PreferredShift: 'dfgd',
    ExpectedSalary: 'gdfgdg',
  });

  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setJobPreferences({ ...jobPreferences, [e.target.name]: e.target.value });
  };

  const { seekerJobPreferences } = useSelector(
    (state) => state.jobPrefrenceFindByIdSeekerReducers
  );
  // const onInputChange = (e) => {
  //   setJobPreferences({ ...jobPreferences, [e.target.name]: e.target.value });
  // };

  const onSubmitJobPreferences = (e) => {
    e.preventDefault();
    dispatch(JobPreferenceUploadAction(jobPreferences));
  };

  const industriesOption = [
    { value: 'java', label: 'java' },
    { value: 'php', label: 'php' },
  ];

  const employmentTypeOption = [
    { value: 'java', label: 'java' },
    { value: 'php', label: 'php' },
  ];

  const preferredLocationOption = [
    { value: 'java', label: 'java' },
    { value: 'php', label: 'php' },
  ];

  const roleOption = [
    { value: 'java', label: 'java' },
    { value: 'php', label: 'php' },
  ];

  const availabilityToJoinOption = [
    { value: 'java', label: 'java' },
    { value: 'php', label: 'php' },
  ];

  const expectedSalaryOption = [
    { value: 'java', label: 'java' },
    { value: 'php', label: 'php' },
  ];

  const preferredShiftOption = [
    { value: 'java', label: 'java' },
    { value: 'php', label: 'php' },
  ];

  const functionOption = [
    { value: 'java', label: 'java' },
    { value: 'php', label: 'php' },
  ];

  const jobTypeOption = [
    { value: 'java', label: 'java' },
    { value: 'php', label: 'php' },
  ];

  const handleJobPreferencesModel = () => {
    setShowModel(true);
  };

  useEffect(() => {
    dispatch(JobPreferenceFindBySeekerIdAction());
  }, [dispatch]);
  return (
    <div className='my-account-card  bg-white p-3'>
      <h2>
        Job Preferences{' '}
        <button
          onClick={handleJobPreferencesModel}
          className='fa fa-pencil edit'></button>
      </h2>
      <div className='details p-3'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='d-flex justify-content-start'>
                  <div>
                    <p>Industry: - </p>
                    <p>Function: -</p>
                    <p>Employment Type: -</p>
                    <p>Preferred Location: -</p>
                    <p>Availability to Join: -</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='d-flex justify-content-center'>
                  <div>
                    <p>
                      {seekerJobPreferences
                        ? seekerJobPreferences.industry
                        : 'N/A'}
                    </p>
                    <p>
                      {seekerJobPreferences
                        ? seekerJobPreferences.function
                        : 'N/A'}
                    </p>
                    <p>
                      {seekerJobPreferences
                        ? seekerJobPreferences.employmentType
                        : 'N/A'}
                    </p>
                    <p>
                      {seekerJobPreferences
                        ? seekerJobPreferences.preferredLocation
                        : 'N/A'}
                    </p>

                    <p>
                      {seekerJobPreferences
                        ? seekerJobPreferences.availabilityToJoin
                        : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='d-flex justify-content-start'>
                  <div>
                    <p>Job Type:: - </p>
                    <p>Role: -</p>
                    <p>Preferred Shift: -</p>
                    <p>Expected Salary: -</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='d-flex justify-content-center'>
                  <div>
                    <p>
                      {seekerJobPreferences
                        ? seekerJobPreferences.jobType
                        : 'N/A'}
                    </p>
                    <p>
                      {seekerJobPreferences ? seekerJobPreferences.role : 'N/A'}
                    </p>
                    <p>
                      {seekerJobPreferences
                        ? seekerJobPreferences.preferredShift
                        : 'N/A'}
                    </p>
                    <p>
                      {seekerJobPreferences
                        ? seekerJobPreferences.expectedSalary
                        : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FormModel
        title='Add Job Prefrences'
        show={showModel}
        size='lg'
        onHide={() => setShowModel(false)}>
        <form onSubmit={onSubmitJobPreferences}>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Enter Education</label>
            <Select
              options={industriesOption}
              className='form-select-dropdown'
              classNamePrefix='form-control-menu'
              placeholder='Keyword e.g(Job Title , Description , Tags)'
              isSearchable
              // value={keyword}
              // onChange={(keyword) => setKeyword(keyword)}
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
          <div className='form-group'>
            <label for='exampleInputPassword1'>Function</label>
            <Select
              options={functionOption}
              className='form-select-dropdown'
              classNamePrefix='form-control-menu'
              placeholder='Keyword e.g(Job Title , Description , Tags)'
              isSearchable
              value='fdfd'
              onChange={(e) => onInputChange(e)}
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

          <div className='form-group'>
            <label for='exampleInputPassword1'>Employment Type</label>
            <Select
              options={employmentTypeOption}
              className='form-select-dropdown'
              classNamePrefix='form-control-menu'
              placeholder='Keyword e.g(Job Title , Description , Tags)'
              isSearchable
              // value={keyword}
              // onChange={(keyword) => setKeyword(keyword)}
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

          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Preferred Location</label>
                <Select
                  options={preferredLocationOption}
                  className='form-select-dropdown'
                  classNamePrefix='form-control-menu'
                  placeholder='Keyword e.g(Job Title , Description , Tags)'
                  isSearchable
                  // value={keyword}
                  // onChange={(keyword) => setKeyword(keyword)}
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
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Availability To Join</label>
                <Select
                  options={availabilityToJoinOption}
                  className='form-select-dropdown'
                  classNamePrefix='form-control-menu'
                  placeholder='Keyword e.g(Job Title , Description , Tags)'
                  isSearchable
                  // value={keyword}
                  // onChange={(keyword) => setKeyword(keyword)}
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
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Job Type</label>
                <Select
                  options={jobTypeOption}
                  className='form-select-dropdown'
                  classNamePrefix='form-control-menu'
                  placeholder='Keyword e.g(Job Title , Description , Tags)'
                  isSearchable
                  // value={keyword}
                  // onChange={(keyword) => setKeyword(keyword)}
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
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Preferred Shift</label>
                <Select
                  options={preferredShiftOption}
                  className='form-select-dropdown'
                  classNamePrefix='form-control-menu'
                  placeholder='Keyword e.g(Job Title , Description , Tags)'
                  isSearchable
                  // value={keyword}
                  // onChange={(keyword) => setKeyword(keyword)}
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
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Role</label>
                <Select
                  options={roleOption}
                  className='form-select-dropdown'
                  classNamePrefix='form-control-menu'
                  placeholder='Keyword e.g(Job Title , Description , Tags)'
                  isSearchable
                  // value={keyword}
                  // onChange={(keyword) => setKeyword(keyword)}
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
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Expected Salary</label>
                <Select
                  options={expectedSalaryOption}
                  className='form-select-dropdown'
                  classNamePrefix='form-control-menu'
                  placeholder='Keyword e.g(Job Title , Description , Tags)'
                  isSearchable
                  // value={keyword}
                  // onChange={(keyword) => setKeyword(keyword)}
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
            </div>
          </div>

          <div className='d-flex justify-content-end'>
            <button
              type='submit'
              style={{
                width: '200px',
              }}
              className='btn btn-danger form-control btn-sm p-2'
              onClick={props.onHide}>
              Submit
            </button>
            <button
              style={{
                width: '200px',
              }}
              className='btn btn-danger p-2 form-control'
              onClick={props.onHide}>
              Close
            </button>
          </div>
        </form>
      </FormModel>
    </div>
  );
};
export default JobPreferences;
