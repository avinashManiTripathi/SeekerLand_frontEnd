import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PersonalDetailsFindBySeekerIdAction,
  PersonalDetailsUploadAction,
} from '../../Actions/PersonalDetails.action';
import FormModel from '../Models/FormModel';
const PersonalDetails = () => {
  const [showModel, setShowModel] = useState();
  const [personalDetails, setPersonalDetails] = useState({
    gender: '',
    maritalStatus: '',
    category: '',
    homeTown: '',
  });

  const { seekerPersonalDetails } = useSelector(
    (state) => state.personalDetailsFindBySeekerIdReducer
  );

  console.log('sess', seekerPersonalDetails);

  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  const handlePersonalDetails = () => {
    setShowModel(true);
  };
  const handlePersonalDetailsSubmit = (e) => {
    e.preventDefault();
    dispatch(PersonalDetailsUploadAction(personalDetails));
  };

  useEffect(() => {
    dispatch(PersonalDetailsFindBySeekerIdAction());
  }, [dispatch]);

  return (
    <div className='my-account-card  bg-white p-3'>
      <h2>
        Personal Details{' '}
        <button
          onClick={handlePersonalDetails}
          className='fa fa-pencil edit'></button>
      </h2>
      <div className='p-3 details'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='d-flex justify-content-start'>
                  <div>
                    <p>Home Town: - </p>
                    <p>Gender: -</p>
                    <p>Marital Status: -</p>
                    <p>Category: -</p>
                    <p>Home Town: - </p>
                    <p>Gender: -</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='d-flex justify-content-center'>
                  <div>
                    <p>
                      {seekerPersonalDetails
                        ? seekerPersonalDetails.homeTown
                        : 'N/A'}
                    </p>
                    <p>
                      {seekerPersonalDetails
                        ? seekerPersonalDetails.gender
                        : 'N/A'}
                    </p>
                    <p>
                      {seekerPersonalDetails
                        ? seekerPersonalDetails.materialStatus
                        : 'N/A'}
                    </p>
                    <p>
                      {seekerPersonalDetails
                        ? seekerPersonalDetails.category
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
                    <p>Home Town: - </p>
                    <p>Gender: -</p>
                    <p>Marital Status: -</p>
                    <p>Category: -</p>
                    <p>Home Town: - </p>
                    <p>Gender: -</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='d-flex justify-content-center'>
                  <div>
                    <p>N/A</p>
                    <p>N/A</p>
                    <p>N/A</p>
                    <p>N/A</p>
                    <p>N/A</p>
                    <p>N/A</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormModel
        title='Add IT Skills'
        show={showModel}
        size='md'
        onHide={() => setShowModel(false)}>
        <form onSubmit={handlePersonalDetailsSubmit}>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Gender</label>
            <select
              className='form-select'
              onChange={(e) => onInputChange(e)}
              name='gender'>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Version</label>
            <select
              className='form-select'
              onChange={(e) => onInputChange(e)}
              name='materialStatus'>
              <option value='single'>Single</option>
              <option value='married'>Married</option>
            </select>
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Home Town</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Home Town'
              name='homeTown'
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Category</label>
            <input
              type='text'
              className='form-control'
              name='category'
              onChange={(e) => onInputChange(e)}
              placeholder='Enter Categroy'
            />
          </div>
          <div className='d-flex justify-content-end mt-1'>
            <button type='submit' className='btn btn-danger m-1'>
              Submit
            </button>
            <button className='btn btn-danger m-1'>cancel</button>
          </div>
        </form>
      </FormModel>
    </div>
  );
};

export default PersonalDetails;
