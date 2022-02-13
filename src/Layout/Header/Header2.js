import React, { useState } from 'react';
import './Header2.css';
import { Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { capitalize } from '../../Helper/Utility';
import { useDispatch } from 'react-redux';
import { LogoutAction } from '../../Actions/Registration.action';
const Header2 = ({ isAuthenticated, seeker }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickLogout = () => {
    dispatch(LogoutAction());
    history.push('/signin');
  };

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='white'
      variant='white  fixed-top  '>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          <i className='fa fa-cube'></i>
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

            {/* <Link to='/' className='dropdown nav-item nav-link active'>
              <i className='fa fa-briefcase'></i>
              <span>Jobs</span>
              <div class='dropdown-content'>
                <ul
                  class='list-group'
                  style={{
                    listStyleType: 'none',
                  }}>
                  <li>
                    <Link class='dropdown-item' to='/java-jobs-in-noida'>
                      Jobs By Location
                    </Link>
                  </li>
                  <li>
                    <Link class='dropdown-item' to='#'>
                      Jobs By Role
                    </Link>
                  </li>
                  <li>
                    <Link class='dropdown-item' to='/'>
                      Jobs By Category
                    </Link>
                  </li>
                  <li>
                    <Link class='dropdown-item' to='/'>
                      Jobs By Country
                    </Link>
                  </li>
                  <li>
                    <Link class='dropdown-item' to='/'>
                      Jobs By Companies
                    </Link>
                  </li>
                </ul>
              </div>
            </Link> */}

            <Link to='/recruiters' className='nav-item nav-link'>
              <i className='fa fa-users'></i>
              <span>Connections</span>
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
            <Link
              className='postjob-button'
              to='/signin'
              style={{ marginRight: '20px' }}>
              Employers/Post Job
            </Link>

            {isAuthenticated ? (
              <Link to='#' className='dropdown nav-item nav-link active border'>
                <span> {capitalize(seeker.firstName)}</span>
                <div class='dropdown-content'>
                  <ul
                    class='list-group'
                    style={{
                      listStyleType: 'none',
                    }}>
                    <li>
                      <Link class='dropdown-item' to='/dashboard'>
                        My Profile
                      </Link>
                    </li>

                    <li>
                      <Link
                        class='dropdown-item'
                        onClick={onClickLogout}
                        to='/'>
                        log out
                      </Link>
                    </li>
                  </ul>
                </div>
              </Link>
            ) : (
              <>
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
