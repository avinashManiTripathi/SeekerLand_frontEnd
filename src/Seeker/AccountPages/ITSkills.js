import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ITSkillsUploadAction } from '../../Actions/ITSkills.action';
import FormModel from '../Models/FormModel';

const ITSkills = (props) => {
  const [showModel, setShowModel] = useState(false);
  const [iTSkills, setITSkills] = useState({
    skillName: '',
    version: '',
    experience: '',
    lastUsed: '',
  });

  const dispatch = useDispatch();
  const onInputChange = (e) => {
    setITSkills({ ...iTSkills, [e.target.name]: e.target.value });
  };

  const handleITSkillsSubmit = (e) => {
    e.preventDefault();
    dispatch(ITSkillsUploadAction(iTSkills));
  };

  const handleAddItSkills = () => {
    setShowModel(true);
  };

  return (
    <div className='my-account-card shadow bg-white p-3'>
      <div className='row'>
        <div className='col-md-6'>
          <h2>IT Skills</h2>
        </div>
        <div className='col-md-6'>
          <Link
            onClick={handleAddItSkills}
            to='#'
            className='d-flex justify-content-end add-link'>
            IT Skills +
          </Link>
        </div>
      </div>
      <div className='mt-3 details'>
        <table className='table table-sm'>
          <thead>
            <tr>
              <th scope='col'>Skills</th>
              <th scope='col'>Version</th>
              <th scope='col'>Last Used</th>
              <th scope='col'>Experience</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>HTML5</th>
              <td>5</td>
              <td>2021</td>
              <td>2 Years 0 Month</td>
              <td className='action'>
                <i className='fa fa-pencil'></i>

                <i className='fa fa-trash'></i>
              </td>
            </tr>
            <tr>
              <th scope='row'>Java </th>
              <td>11</td>
              <td>2021</td>
              <td>1 Years 0 Month</td>
              <td className='action'>
                <i className='fa fa-pencil'></i>

                <i className='fa fa-trash'></i>
              </td>
            </tr>
            <tr>
              <th scope='row'>Spring</th>
              <td>5</td>
              <td>2021</td>
              <td>3 Years 0 Month</td>
              <td className='action'>
                <i className='fa fa-pencil'></i>

                <i className='fa fa-trash'></i>
              </td>
            </tr>
            <tr>
              <th scope='row'>CSS</th>
              <td>5</td>
              <td>2019</td>
              <td>3 Years 0 Month</td>
              <td className='action'>
                <i className='fa fa-pencil'></i>

                <i className='fa fa-trash'></i>
              </td>
            </tr>
            <tr>
              <th scope='row'>HTML5</th>
              <td>5</td>
              <td>2021</td>
              <td>2 Years 0 Month</td>
              <td className='action'>
                <i className='fa fa-pencil'></i>

                <i className='fa fa-trash'></i>
              </td>
            </tr>
            <tr>
              <th scope='row'>Java </th>
              <td>11</td>
              <td>2021</td>
              <td>1 Years 0 Month</td>
              <td className='action'>
                <i className='fa fa-pencil'></i>

                <i className='fa fa-trash'></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <FormModel
        title='Add IT Skills'
        show={showModel}
        size='md'
        onHide={() => setShowModel(false)}>
        <form onSubmit={handleITSkillsSubmit}>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Skill</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your Skills'
              name='skillName'
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Version</label>
            <input
              type='number'
              className='form-control'
              placeholder='Enter Version'
              name='version'
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Last Used</label>
            <input
              type='date'
              className='form-control'
              placeholder='Enter Version'
              name='lastUsed'
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Experience</label>
            <input
              type='number'
              className='form-control'
              name='experience'
              onChange={(e) => onInputChange(e)}
              placeholder='Enter Experience'
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

export default ITSkills;
