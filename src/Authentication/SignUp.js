import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import './signUp.css';
const SignUp = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);
  const HandleSteps = (steps) => {
    setProgress(25 * steps);
    setStep(steps);
  };
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2'>
          <div className='card px-0 pt-4 pb-0 mt-3 mb-3 p-5 shadow bg-white signup-form'>
            <h2 id='heading'>Sign Up Your User Account</h2>
            <p className='sub-heading'>
              Fill all form field to go to next step
            </p>
            <form id='msform'>
              <ul id='progressbar'>
                <li
                  className={
                    step === 1 || step === 2 || step === 3 || step === 4
                      ? 'active'
                      : 'un-active'
                  }
                  id='account'>
                  <strong>Account</strong>
                </li>
                <li
                  className={
                    step === 2 || step === 3 || step === 4
                      ? 'active'
                      : 'un-active'
                  }
                  id='personal'>
                  <strong>Personal</strong>
                </li>
                <li
                  className={step === 3 || step === 4 ? 'active' : 'un-active'}
                  id='payment'>
                  <strong>CV/Image</strong>
                </li>
                <li className={step === 4 && 'active'} id='confirm'>
                  <strong>Finish</strong>
                </li>
              </ul>
              <div className='progress_section'>
                <ProgressBar animated now={progress} />
              </div>
              <br />
              {step === 1 && (
                <fieldset>
                  <div className='form-card'>
                    <div className='row'>
                      <div className='col-7'>
                        <h2 className='fs-title'>Account Information:</h2>
                      </div>
                      <div className='col-5'>
                        <h2 className='steps'>Step 1 - 4</h2>
                      </div>
                    </div>{' '}
                    <label className='fieldlabels'>Email: *</label>{' '}
                    <input type='email' name='email' placeholder='Email Id' />{' '}
                    <label className='fieldlabels'>Password: *</label>{' '}
                    <input type='password' name='pwd' placeholder='Password' />{' '}
                    <label className='fieldlabels'>Confirm Password: *</label>{' '}
                    <input
                      type='password'
                      name='cpwd'
                      placeholder='Confirm Password'
                    />
                  </div>{' '}
                  <input
                    type='button'
                    name='next'
                    className='next action-button'
                    value='Next'
                    onClick={() => HandleSteps(2)}
                  />
                </fieldset>
              )}
              {step === 2 && (
                <fieldset>
                  <div className='form-card'>
                    <div className='row'>
                      <div className='col-7'>
                        <h2 className='fs-title'>Personal Information:</h2>
                      </div>
                      <div className='col-5'>
                        <h2 className='steps'>Step 2 - 4</h2>
                      </div>
                    </div>{' '}
                    <label className='fieldlabels'>First Name: *</label>{' '}
                    <input type='text' name='fname' placeholder='First Name' />{' '}
                    <label className='fieldlabels'>Last Name: *</label>{' '}
                    <input type='text' name='lname' placeholder='Last Name' />{' '}
                    <label className='fieldlabels'>Contact No.: *</label>{' '}
                    <input type='text' name='phno' placeholder='Contact No.' />{' '}
                  </div>{' '}
                  <input
                    type='button'
                    name='next'
                    className='next action-button'
                    value='Next'
                    onClick={() => HandleSteps(3)}
                  />{' '}
                  <input
                    type='button'
                    name='previous'
                    className='previous action-button-previous'
                    value='Previous'
                    onClick={() => HandleSteps(1)}
                  />
                </fieldset>
              )}
              {step === 3 && (
                <fieldset>
                  <div className='form-card'>
                    <div className='row'>
                      <div className='col-7'>
                        <h2 className='fs-title'>Image Upload:</h2>
                      </div>
                      <div className='col-5'>
                        <h2 className='steps'>Step 3 - 4</h2>
                      </div>
                    </div>{' '}
                    <label className='fieldlabels'>Upload Your Photo:</label>{' '}
                    <input className='form-control' accept='image/*' />{' '}
                    <label className='fieldlabels'>
                      Upload Signature Photo:
                    </label>{' '}
                    <input className='form-control' accept='image/*' />
                  </div>{' '}
                  <input
                    type='button'
                    name='next'
                    className='next action-button'
                    value='Submit'
                    onClick={() => HandleSteps(4)}
                  />{' '}
                  <input
                    type='button'
                    name='previous'
                    className='previous action-button-previous'
                    value='Previous'
                    onClick={() => HandleSteps(2)}
                  />
                </fieldset>
              )}
              {step === 4 && (
                <fieldset>
                  <div className='form-card'>
                    <div className='row'>
                      <div className='col-7'>
                        <h2 className='fs-title'>Finish:</h2>
                      </div>
                      <div className='col-5'>
                        <h2 className='steps'>Step 4 - 4</h2>
                      </div>
                    </div>{' '}
                    <br />
                    <br />
                    <h2 className='purple-text text-center'>
                      <strong>SUCCESS !</strong>
                    </h2>{' '}
                    <br />
                    <div className='row justify-content-center'>
                      <div className='col-3'>
                        {' '}
                        <img
                          src='https://i.imgur.com/GwStPmg.png'
                          className='fit-image'
                          alt='check'
                        />{' '}
                      </div>
                    </div>{' '}
                    <br />
                    <br />
                    <div className='row justify-content-center'>
                      <div className='col-7 text-center'>
                        <h5 className='purple-text text-center'>
                          You Have Successfully Signed Up
                        </h5>
                      </div>
                    </div>
                  </div>
                </fieldset>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
