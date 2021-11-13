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
    <div class='container'>
      <div class='row justify-content-center'>
        <div class='col-11 col-sm-9 col-md-7 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2'>
          <div class='card px-0 pt-4 pb-0 mt-3 mb-3 p-5 shadow bg-white signup-form'>
            <h2 id='heading'>Sign Up Your User Account</h2>
            <p>Fill all form field to go to next step</p>
            <form id='msform'>
              <ul id='progressbar'>
                <li
                  className={
                    step == 1 || step == 2 || step == 3 || step == 4
                      ? 'active'
                      : ''
                  }
                  id='account'>
                  <strong>Account</strong>
                </li>
                <li
                  className={
                    step == 2 || step == 3 || step == 4 ? 'active' : ''
                  }
                  id='personal'>
                  <strong>Personal</strong>
                </li>
                <li
                  className={step == 3 || step == 4 ? 'active' : ''}
                  id='payment'>
                  <strong>CV/Image</strong>
                </li>
                <li className={step == 4 && 'active'} id='confirm'>
                  <strong>Finish</strong>
                </li>
              </ul>
              <div class='progress_section'>
                <ProgressBar animated now={progress} />
              </div>
              <br />
              {step == 1 && (
                <fieldset>
                  <div class='form-card'>
                    <div class='row'>
                      <div class='col-7'>
                        <h2 class='fs-title'>Account Information:</h2>
                      </div>
                      <div class='col-5'>
                        <h2 class='steps'>Step 1 - 4</h2>
                      </div>
                    </div>{' '}
                    <label class='fieldlabels'>Email: *</label>{' '}
                    <input type='email' name='email' placeholder='Email Id' />{' '}
                    <label class='fieldlabels'>Username: *</label>{' '}
                    <input type='text' name='uname' placeholder='UserName' />{' '}
                    <label class='fieldlabels'>Password: *</label>{' '}
                    <input type='password' name='pwd' placeholder='Password' />{' '}
                    <label class='fieldlabels'>Confirm Password: *</label>{' '}
                    <input
                      type='password'
                      name='cpwd'
                      placeholder='Confirm Password'
                    />
                  </div>{' '}
                  <input
                    type='button'
                    name='next'
                    class='next action-button'
                    value='Next'
                    onClick={() => HandleSteps(2)}
                  />
                </fieldset>
              )}
              {step == 2 && (
                <fieldset>
                  <div class='form-card'>
                    <div class='row'>
                      <div class='col-7'>
                        <h2 class='fs-title'>Personal Information:</h2>
                      </div>
                      <div class='col-5'>
                        <h2 class='steps'>Step 2 - 4</h2>
                      </div>
                    </div>{' '}
                    <label class='fieldlabels'>First Name: *</label>{' '}
                    <input type='text' name='fname' placeholder='First Name' />{' '}
                    <label class='fieldlabels'>Last Name: *</label>{' '}
                    <input type='text' name='lname' placeholder='Last Name' />{' '}
                    <label class='fieldlabels'>Contact No.: *</label>{' '}
                    <input type='text' name='phno' placeholder='Contact No.' />{' '}
                    <label class='fieldlabels'>Alternate Contact No.: *</label>{' '}
                    <input
                      type='text'
                      name='phno_2'
                      placeholder='Alternate Contact No.'
                    />
                  </div>{' '}
                  <input
                    type='button'
                    name='next'
                    class='next action-button'
                    value='Next'
                    onClick={() => HandleSteps(3)}
                  />{' '}
                  <input
                    type='button'
                    name='previous'
                    class='previous action-button-previous'
                    value='Previous'
                    onClick={() => HandleSteps(1)}
                  />
                </fieldset>
              )}
              {step == 3 && (
                <fieldset>
                  <div class='form-card'>
                    <div class='row'>
                      <div class='col-7'>
                        <h2 class='fs-title'>Image Upload:</h2>
                      </div>
                      <div class='col-5'>
                        <h2 class='steps'>Step 3 - 4</h2>
                      </div>
                    </div>{' '}
                    <label class='fieldlabels'>Upload Your Photo:</label>{' '}
                    <input className='form-control' accept='image/*' />{' '}
                    <label class='fieldlabels'>Upload Signature Photo:</label>{' '}
                    <input className='form-control' accept='image/*' />
                  </div>{' '}
                  <input
                    type='button'
                    name='next'
                    class='next action-button'
                    value='Submit'
                    onClick={() => HandleSteps(4)}
                  />{' '}
                  <input
                    type='button'
                    name='previous'
                    class='previous action-button-previous'
                    value='Previous'
                    onClick={() => HandleSteps(2)}
                  />
                </fieldset>
              )}
              {step == 4 && (
                <fieldset>
                  <div class='form-card'>
                    <div class='row'>
                      <div class='col-7'>
                        <h2 class='fs-title'>Finish:</h2>
                      </div>
                      <div class='col-5'>
                        <h2 class='steps'>Step 4 - 4</h2>
                      </div>
                    </div>{' '}
                    <br />
                    <br />
                    <h2 class='purple-text text-center'>
                      <strong>SUCCESS !</strong>
                    </h2>{' '}
                    <br />
                    <div class='row justify-content-center'>
                      <div class='col-3'>
                        {' '}
                        <img
                          src='https://i.imgur.com/GwStPmg.png'
                          class='fit-image'
                        />{' '}
                      </div>
                    </div>{' '}
                    <br />
                    <br />
                    <div class='row justify-content-center'>
                      <div class='col-7 text-center'>
                        <h5 class='purple-text text-center'>
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
