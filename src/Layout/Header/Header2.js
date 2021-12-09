import React, { useState } from 'react';
import './Header2.css';
import { Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
const Header2 = () => {
  const localtion = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  console.log('', localtion.pathname);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Navbar collapseOnSelect expand='lg' bg='white' variant='white  fixed-top '>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          <i className='fa fa-cube'></i>
          {/* <img src={agwate} className=''></img> */}
          <b> Agwate</b>
        </Link>
        <button
          type='button'
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarCollapse'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto header-nav-link'>
            <Link to='/' className='nav-item nav-link active'>
              <i className='fa fa-home'></i>
              <span>Home</span>
            </Link>

            <Link to='/jobs' className='nav-item nav-link'>
              <i className='fa fa-briefcase'></i>
              <span>Jobs</span>
            </Link>
            <Link to='/recruiters' className='nav-item nav-link'>
              <i className='fa fa-users'></i>
              <span>Recruiters</span>
            </Link>
            <Link to='/' className='nav-item nav-link'>
              <i className='fa fa-pie-chart'></i>
              <span>Reports</span>
            </Link>
            <Link to='/' className='nav-item nav-link'>
              <i className='fa fa-gears'></i>
              <span>Careers Tips</span>
            </Link>
            <Link to='/' className='nav-item nav-link'>
              <i className='fa fa-envelope'></i>
              <span>Messages</span>
            </Link>
            <Link to='/' className='nav-item nav-link'>
              <i className='fa fa-bell'></i>
              <span>Notifications</span>
            </Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <>
                <Dropdown
                  onMouseLeave={() => setShowDropdown(false)}
                  onMouseOver={() => setShowDropdown(true)}
                  //   className='btn-signIn'
                >
                  <Dropdown.Toggle
                    id='dropdown-basic'
                    className='user-action-dropdown'>
                    My Account
                  </Dropdown.Toggle>
                  <Dropdown.Menu show={showDropdown}>
                    <Dropdown.Item href='#/action-1'>Profile</Dropdown.Item>
                    <Dropdown.Item href='#/action-2'>Settings</Dropdown.Item>
                    <Dropdown.Item href='#/action-2'>
                      Update Phone
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <Link
                  className='postjob-button'
                  to='/signin'
                  style={{ marginRight: '20px' }}>
                  Employers/Post Job
                </Link>
                <Link
                  className='nav-link'
                  to='/signUp'
                  style={{
                    borderRight: '1px solid #D6D3D7',
                  }}>
                  Sign Up
                </Link>
                <Link className='nav-link' to='/signin'>
                  Login In
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header2;
