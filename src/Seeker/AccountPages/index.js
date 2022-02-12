import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormModel from '../Models/FormModel';

export const MyAccountUploadResmeCard = (props) => {
  const [fileName, setFileName] = useState(null);
  const [fileSize, setFileSize] = useState();
  const [fileSizeError, setFileSizeError] = useState();

  const handleUploadResume = (event) => {
    if (event.target.files[0].name) {
      const name = event.target.files[0].name;
      const lastDot = name.lastIndexOf('.');
      const ext = name.substring(lastDot + 1);
      const size = Math.floor(event.target.files[0].size / 1000000);
      setFileSize(Math.floor(event.target.files[0].size / 1000000));

      if ((size <= 2 && ext === 'docs') || ext === 'doc' || ext === 'pdf') {
        setFileName(event.target.files[0].name);
      } else {
        setFileSizeError(fileSize);
      }
    }
  };
  return (
    <div className='my-account-card bg-white p-3'>
      <h2>Upload Resume</h2>

      <div className='d-flex justify-content-center border m-2 p-5'>
        <div className=''>
          <div className='button-wrap d-flex justify-content-center'>
            <label className='new-button' for='upload'>
              {fileName ? <span>{fileName}</span> : <span>Upload Resume</span>}
              <input
                id='upload'
                onChange={(e) => handleUploadResume(e)}
                type='file'
                accept=''
              />
            </label>
          </div>

          <small id='emailHelp' className='form-text text-muted'>
            Supported Formats: doc, docx, rtf, pdf, upto 2 MB
          </small>
          {fileSizeError && (
            <small id='emailHelp' className='form-text text-muted'>
              Your File Is Too Large {fileSizeError} MB
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

export const MyAccountSkillCard = (props) => {
  return (
    <div className='my-account-card bg-white p-3'>
      <div className='row'>
        <div className='col-md-6'>
          <h2>Key Skills</h2>
        </div>
        <div className='col-md-6 '>
          <Link to='#' className='d-flex justify-content-end add-link'>
            + Add More
          </Link>
        </div>
      </div>

      <div className=' key-skills'>
        <span>Java</span>
        <span>PHP</span>
        <span>Spring Boot</span>
        <span>Laravel</span>

        <span>SQL</span>
      </div>
    </div>
  );
};

export const MyAccountEducationCard = (props) => {
  const [showModel, setShowModel] = useState(false);
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
        <form>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Enter Education</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Education'
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
            />
          </div>

          <div className='form-group'>
            <label for='exampleInputPassword1'>Specialization</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter University specialization'
            />
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Course</label>
                <select
                  className='form-select form-control'
                  aria-label='Default select example'>
                  <option selected>BCA</option>
                  <option value='1'>B-TECH</option>
                  <option value='2'>BSC</option>
                  <option value='3'>BA</option>
                </select>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Course Type</label>
                <select
                  className='form-select form-control'
                  aria-label='Default select example'>
                  <option selected>Full Time</option>
                  <option value='1'>Distance</option>
                </select>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Starting To</label>
                <select
                  className='form-select form-control'
                  aria-label='Default select example'>
                  <option selected>2020</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label for='exampleInputPassword1'>Starting From</label>
                <select
                  className='form-select form-control'
                  aria-label='Default select example'>
                  <option selected>2021</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
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
        </form>
      </FormModel>
    </div>
  );
};

export const MyAccountExperienceCard = (props) => {
  return (
    <div className='my-account-card  bg-white p-3'>
      <div className='row'>
        <div className='col-md-6'>
          <h2>Work Experience</h2>
        </div>
        <div className='col-md-6'>
          <Link to='#' className='d-flex justify-content-end add-link'>
            + Add More
          </Link>
        </div>
      </div>
      <div className='mt-3 details'>
        <h3>
          Java Developer at Izs Techocrats India Pvt Ltd{' '}
          <button className='fa fa-pencil edit '></button>
        </h3>
        <p>Badarpur Border 110044 </p>
        <p>2019 (Full time)</p>
      </div>
    </div>
  );
};

export const MyAccountProfileSummaryCard = (props) => {
  return (
    <div className='my-account-card  bg-white p-3'>
      <h2>
        Profile Summary <button className='fa fa-pencil edit'></button>
      </h2>
      <div className='mt-3 details'>
        <h3>
          Fresher with Bachelor Of Computer Application (B.C.A) from Babu
          Banarasi Das University living in India{' '}
        </h3>
      </div>
    </div>
  );
};

export const MyAccountPersonalDetailsCard = (props) => {
  return (
    <div className='my-account-card  bg-white p-3'>
      <h2>
        Personal Details <button className='fa fa-pencil edit'></button>
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
                    <p>Gorakhpur</p>
                    <p>male</p>
                    <p>Unmarried</p>
                    <p>General</p>
                    <p>Gorakhpur</p>
                    <p>male</p>
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
                    <p>Gorakhpur</p>
                    <p>male</p>
                    <p>Unmarried</p>
                    <p>General</p>
                    <p>Gorakhpur</p>
                    <p>male</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MyAccountJobPreferencesCard = (props) => {
  return (
    <div className='my-account-card shadow bg-white p-3'>
      <h2>
        Job Preferences <button className='fa fa-pencil edit'></button>
      </h2>
      <div className='mt-3 details'>
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
    </div>
  );
};

export const MyAccountSkillTableCard = (props) => {
  const [showModel, setShowModel] = useState(false);
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
        <form>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Skill</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your Skills'
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Version</label>
            <input
              type='number'
              className='form-control'
              placeholder='Enter Version'
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Last Used</label>
            <input
              type='date'
              className='form-control'
              placeholder='Enter Version'
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Experience</label>
            <input
              type='number'
              className='form-control'
              placeholder='Enter Experience'
            />
          </div>
        </form>
      </FormModel>
    </div>
  );
};
