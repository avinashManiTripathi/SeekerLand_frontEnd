import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { EducationDetailUploadAction } from '../../Actions/EducationDetail.action';
import FormModel from '../Models/FormModel';

const MyAccountEducation = (props) => {
  const [showModel, setShowModel] = useState(false);
  const [educationDetails, setEducationDetails] = useState({
    education: '',
    Specialization: '',
    universityName: '',
    fromDate: '',
    toDate: '',
    course: '',
    courseType: '',
  });
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setEducationDetails({
      ...educationDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitEducationDetails = (e) => {
    e.preventDefault();
    console.log('educa', educationDetails);
    dispatch(EducationDetailUploadAction(educationDetails));
  };

  const handleEducationDetails = () => {
    setShowModel(true);
  };

  return (
    <div className='my-account-card shadow bg-white p-3'>
      <div className='row'>
        <div className='col-md-6'>
          <h2>Educational Details</h2>
        </div>
        <div className='col-md-6'>
          <Link
            to='#'
            onClick={handleEducationDetails}
            className='d-flex justify-content-end add-link'>
            Educational Details +
          </Link>
        </div>
      </div>
      <div className='mt-3 details'>
        <h3>
          Bachelor Of Computer Application (B.C.A) (Computers){' '}
          <button className='fa fa-pencil edit edit'></button>
        </h3>
        <p>Babu Banarasi Das University</p>
        <p>2019 (Full time)</p>
      </div>
      <FormModel
        title='Add Education Details'
        show={showModel}
        size='lg'
        onHide={() => setShowModel(false)}>
        <form onSubmit={onSubmitEducationDetails}>
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

export default MyAccountEducation;
