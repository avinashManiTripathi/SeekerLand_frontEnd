import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { EducationDetailUploadAction } from '../../Actions/EducationDetail.action';
import FormModel from '../Models/FormModel';

const JobPreferences = (props) => {
  const [showModel, setShowModel] = useState(false);

  const dispatch = useDispatch();
  const onInputChange = (e) => {
    alert('lss');
  };

  const handleJobPreferencesModel = () => {
    setShowModel(true);
  };
  return (
    <div className='my-account-card shadow bg-white p-3'>
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
                    <p>IT/Computer</p>
                    <p>IT</p>
                    <p>Full Time</p>
                    <p>Noida</p>
                    <p>Immediately</p>
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
                    <p>Parmanent</p>
                    <p>Application Developer</p>
                    <p>Night</p>
                    <p>50000 - 1000</p>
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
        <form>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Enter Education</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Education'
              name='education'
              onChange={(e) => onInputChange(e)}
            />
            <small id='emailHelp' className='form-text text-muted'>
              Education shoould be maximum size 30 word
            </small>
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>University Name</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Enter University Name'
              name='universityName'
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className='form-group'>
            <label for='exampleInputPassword1'>Specialization</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter University specialization'
              name='specialization'
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Course</label>
                <select
                  className='form-select form-control'
                  name='course'
                  onChange={(e) => onInputChange(e)}
                  aria-label='Default select example'>
                  <option selected value='bca'>
                    BCA
                  </option>
                  <option selected value='b_tech'>
                    B-Tech
                  </option>
                </select>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Course Type</label>
                <select
                  name='courseType'
                  onChange={(e) => onInputChange(e)}
                  className='form-select form-control'
                  aria-label='Default select example'>
                  <option selected value='fullTime'>
                    Full Time
                  </option>
                  <option value='fullTime'>Distance</option>
                </select>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Starting To</label>
                <input
                  type='date'
                  className='form-control'
                  placeholder='Enter University specialization'
                  name='fromDate'
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Starting From</label>
                <input
                  type='date'
                  className='form-control'
                  placeholder='Enter University specialization'
                  name='toDate'
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
          </div>

          <div className='d-flex '>
            <div className='form-group m-2'>
              <input type='radio' className='custom-control-input' />
              <label
                className='custom-control-label m-2'
                for='customRadioInline1'>
                In Progress
              </label>
            </div>
            <div className='form-group m-2'>
              <input type='radio' className='custom-control-input' />
              <label
                className='custom-control-label  m-2'
                for='customRadioInline1'>
                In Progress
              </label>
            </div>
          </div>

          <div className='form-group m-2'>
            <label for='exampleInputPassword1'>Education Description</label>
            <textarea
              className='form-control'
              placeholder='Enter Description '
            />
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
