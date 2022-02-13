import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { LoginAction } from '../Actions/Registration.action';
import './index.css';

const SignIn = (props) => {
  const history = useHistory();

  const [seeker, setSeeker] = useState({
    email: '',
    password: '',
  });

  const onInputChange = (e) => {
    setSeeker({ ...seeker, [e.target.name]: e.target.value });
  };

  const { message, error } = useSelector((state) => state.loginReducer);

  console.log(message, error);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(LoginAction(seeker, history));
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='signin-sidebar-content '>
            <h4 className='mb-4'>
              Create, <span> Build, Share </span>& Find Better Candidates
            </h4>
            <div className='d-flex'>
              <span>&#9830;</span>{' '}
              <p>
                It's not only FREE but also a great way to connect with job
                seekers
              </p>
            </div>
            <div className='d-flex'>
              <span>&#9830;</span>{' '}
              <p>Build followers network to amplify your Reach </p>
            </div>
            <div className='d-flex'>
              <span>&#9830;</span>{' '}
              <p>Build followers network to amplify your Reach </p>
            </div>
            <div className='d-flex'>
              <span>&#9830;</span>{' '}
              <p>Build followers network to amplify your Reach </p>
            </div>
            <div className='d-flex'>
              <span>&#9830;</span>{' '}
              <p>Share job postings with your Followers </p>
            </div>
            <div className='d-flex'>
              <span>&#9830;</span>{' '}
              <p>Build your very own Personal Brand as a recruiter</p>
            </div>
            <div className='d-flex'>
              <span>&#9830;</span>{' '}
              <p>Build followers network to amplify your Reach </p>
            </div>
            <div className='d-flex'>
              <span>&#9830;</span>{' '}
              <p>
                Create a Ready to Hire talent pipeline for your sourcing needs
              </p>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='sigin-wrapper bg-white'>
            <div className='h2 text-center'>Agwate </div>
            <div className='h4 text-muted text-center pt-2'>
              Seeker Login Credentials
            </div>

            <div className=' text-muted text-center pt-2'>
              {error && (
                <small
                  className='text-danger text-center'
                  style={{
                    alignItems: 'center',
                  }}>
                  {error}
                </small>
              )}
            </div>
            <form className='pt-3' onSubmit={handleLogin}>
              <div className='form-group py-2'>
                <div className='input-field'>
                  {' '}
                  <span className='fa fa-user p-2'></span>{' '}
                  <input
                    type='email'
                    placeholder='Username or Email Address'
                    name='email'
                    onChange={(e) => onInputChange(e)}
                    required
                    className=''
                  />{' '}
                </div>
              </div>
              <div className='form-group py-1 pb-2'>
                <div className='input-field'>
                  {' '}
                  <span className='fa fa-lock p-2'></span>{' '}
                  <input
                    type='password'
                    placeholder='Enter your Password'
                    name='password'
                    onChange={(e) => onInputChange(e)}
                    required
                    className=''
                  />{' '}
                  <button className='btn bg-white text-muted'>
                    {' '}
                    <span className='fa fa-eye-slash'></span>{' '}
                  </button>{' '}
                </div>
              </div>
              <div className='d-flex align-items-start'>
                <div className='remember'>
                  <label className='option text-muted'>
                    Remember me <input type='radio' name='radio' />{' '}
                    <span className='checkmark'></span>{' '}
                  </label>{' '}
                </div>
                <div className='' style={{ marginLeft: '20px' }}>
                  {' '}
                  <Link to='/forget-password' id='forgot'>
                    Forgot Password?
                  </Link>{' '}
                </div>
              </div>{' '}
              <button
                type='submit'
                className=' sign-in-btn text-center my-3 form-control'>
                Log in
              </button>
              <div className='text-center pt-3 text-muted'>
                Not a member?{' '}
                <Link to='/signup' className='form-control'>
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* <Col xs={6} md={6}>
          <div className='signin-sidebar-form bg-white shadow p-4'>
            <div className='form_title'>
              <h2>Sign In</h2>
            </div>
            <Form onSubmit={handleLogin}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <input
                  type='email'
                  className='br-0 form-control'
                  name='email'
                  onChange={(e) => onInputChange(e)}
                  placeholder='Enter Registered Email ID'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <div className='d-flex'>
                  <input
                    type='password'
                    name='password'
                    className='br-0 form-control'
                    onChange={(e) => onInputChange(e)}
                    placeholder='Enter Password '
                  />
                  <Button
                    variant='danger br-0 form-btn'
                    onClick={handleSendOTP}>
                    {state.buttonLoader ? (
                      <div className='d-flex'>
                        <span>GenerateOTP </span>
                        <Spinner
                          as='span'
                          className='m-1'
                          animation='border'
                          size='sm'
                          role='status'
                          aria-hidden='true'
                        />
                      </div>
                    ) : (
                      <>GenerateOTP</>
                    )}
                  </Button>
                </div>
                {
                  error && 
                     <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
                }
             
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check
                  type='checkbox'
                  className='text-muted form-inner-text-danger'
                  label='Remember me'
                />
              </Form.Group>
              <div className='d-flex'>
                <Button variant='danger br-0 form-btn' type='submit'>
                  Sign In
                </Button>
             
                <Form.Text className='m-3 text-muted form-inner-text-danger'>
                  Don't have an account ? <Link to='/signup'>Sign Up</Link>
                </Form.Text>
              </div>
            </Form>
          </div>
        </Col> */}
      </div>
    </div>
  );
};

export default SignIn;
