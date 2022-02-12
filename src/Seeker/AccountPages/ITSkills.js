import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ITSkillsFindBySeekerIdAction,
  ITSkillsUploadAction,
} from '../../Actions/ITSkills.action';
import FormModel from '../Models/FormModel';

const ITSkills = (props) => {
  const [showModel, setShowModel] = useState(false);
  const [iTSkills, setITSkills] = useState({
    skillName: '',
    version: '',
    experience: '',
    lastUsed: '',
  });
  const { seekerITSkills } = useSelector(
    (state) => state.iTSKillsFindBySeekerIdIdReducers
  );

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

  useEffect(() => {
    dispatch(ITSkillsFindBySeekerIdAction());
  }, [dispatch]);

  return (
    <div className='my-account-card  bg-white p-3'>
      <div className='row'>
        <div className='col-md-6'>
          <h2>IT Skills</h2>
        </div>
        <div className='col-md-6'>
          <Link
            onClick={handleAddItSkills}
            to='#'
            className='d-flex justify-content-end add-link'>
            + Add More
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
            {seekerITSkills &&
              seekerITSkills.map((skills) => {
                return (
                  <tr>
                    <th scope='row'>{skills.skillName}</th>
                    <td>{skills.version}</td>
                    <td>{skills.lastUsed}</td>
                    <td>{skills.experience}</td>
                    <td className='action'>
                      <i className='fa fa-pencil'></i>

                      <i className='fa fa-trash'></i>
                    </td>
                  </tr>
                );
              })}
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
