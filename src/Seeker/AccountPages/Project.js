import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ProjectFindBySeekerIdAction,
  ProjectUploadAction,
} from '../../Actions/Project.action';
import FormModel from '../Models/FormModel';

const Project = (props) => {
  const [showModel, setShowModel] = useState(false);
  const [project, setProject] = useState({
    projectTitle: '',
    projectStatus: '',
    client: '',
    fromDate: '',
    toDate: '',
    description: '',
  });
  const { seekerProject } = useSelector(
    (state) => state.projectFindBySeekerIdReducers
  );

  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleProjectOnSubmit = (e) => {
    e.preventDefault();
    console.log('OnSubmit', project);
    dispatch(ProjectUploadAction(project));
  };

  const handleAddProject = () => {
    setShowModel(true);
  };

  useEffect(() => {
    dispatch(ProjectFindBySeekerIdAction());
  }, [dispatch]);

  return (
    <div>
      <div className='my-account-card  bg-white p-3'>
        <div className='row'>
          <div className='col-md-6'>
            <h2>Project</h2>
          </div>
          <div className='col-md-6'>
            <Link
              onClick={handleAddProject}
              to='#'
              className='d-flex justify-content-end add-link'>
              + Add More
            </Link>
          </div>
        </div>

        {seekerProject &&
          seekerProject.map((project) => {
            return (
              <div className='mt-3 details'>
                <h3>
                  {project.projectTitle}{' '}
                  <button className='fa fa-pencil edit'></button>
                </h3>
                <p>
                  Client :- <span>{project.client}</span>
                </p>
                <p>{project.description}</p>
                <p>{project.fromDate} (Full time)</p>
              </div>
            );
          })}
      </div>

      <FormModel
        title='Add Project'
        show={showModel}
        size='lg'
        onHide={() => setShowModel(false)}>
        <form onSubmit={handleProjectOnSubmit}>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Project Title</label>
            <input
              type='text'
              className='form-control'
              name='projectTitle'
              onChange={(e) => onInputChange(e)}
              placeholder='Enter Project Title'
            />
            <small id='emailHelp' className='form-text text-muted'>
              Project Title shoould be maximum size 30 word
            </small>
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Client</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputPassword1'
              name='client'
              onChange={(e) => onInputChange(e)}
              placeholder='Enter Client Name'
            />
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'> From Date</label>
                <input
                  type='date'
                  className='form-control'
                  id='exampleInputPassword1'
                  name='fromDate'
                  onChange={(e) => onInputChange(e)}
                  placeholder='Enter Client Name'
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'> From Date</label>
                <input
                  type='date'
                  className='form-control'
                  id='exampleInputPassword1'
                  name='toDate'
                  onChange={(e) => onInputChange(e)}
                  placeholder='Enter Client Name'
                />
              </div>
            </div>
          </div>

          <div className='d-flex '>
            <div className='form-group m-2'>
              <select name='projectStatus' onChange={(e) => onInputChange(e)}>
                <option value='inProgress'> In Progress</option>
                <option value='finished'>Finished</option>
              </select>
            </div>
          </div>

          <div className='form-group m-2'>
            <label for='exampleInputPassword1'>Project Description</label>
            <textarea
              className='form-control'
              placeholder='Enter Description '
              name='description'
              onChange={(e) => onInputChange(e)}
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

export default Project;
