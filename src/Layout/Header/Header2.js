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
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='white'
      variant='white shadow fixed-top '>
      <div className='container'>
        <Link to='/' class='navbar-brand'>
          <i class='fa fa-cube'></i>Agwate<b>SeekerLand</b>
        </Link>
        <button
          type='button'
          class='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarCollapse'>
          <span class='navbar-toggler-icon'></span>
        </button>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto header-nav-link'>
            <Link to='/' class='nav-item nav-link active'>
              <i class='fa fa-home'></i>
              <span>Home</span>
            </Link>

            <Link to='/jobs' class='nav-item nav-link'>
              <i class='fa fa-briefcase'></i>
              <span>Jobs</span>
            </Link>
            <Link to='/recruiters' class='nav-item nav-link'>
              <i class='fa fa-users'></i>
              <span>Recruiters</span>
            </Link>
            <Link to='/' class='nav-item nav-link'>
              <i class='fa fa-pie-chart'></i>
              <span>Reports</span>
            </Link>
            <Link to='/' class='nav-item nav-link'>
              <i class='fa fa-gears'></i>
              <span>Careers Tips</span>
            </Link>
            <Link to='/' class='nav-item nav-link'>
              <i class='fa fa-envelope'></i>
              <span>Messages</span>
            </Link>
            <Link to='/' class='nav-item nav-link'>
              <i class='fa fa-bell'></i>
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
                    <img
                      src='https://www.tutorialrepublic.com/examples/images/avatar/3.jpg'
                      class='avatar'
                      alt='Avatar'
                    />
                    Avinash Tripathi
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
                  className='nav-link'
                  to='/signin'
                  style={{ fontWeight: 'bold' }}>
                  SignIn
                </Link>
                <Link
                  className='nav-link'
                  to='/signin'
                  style={{ border: '1px solid #ffffff' }}>
                  Employers/Post Job
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
