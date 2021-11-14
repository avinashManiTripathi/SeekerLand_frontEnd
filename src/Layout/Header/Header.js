// import React, { useState } from 'react';
// import { Dropdown, Nav, Navbar } from 'react-bootstrap';
// import { Link, useHistory, useLocation } from 'react-router-dom';
// import './Header.css';
// import userIcon from './user-icon.png';

// const Header = (props) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const history = useHistory();
//   const location = useLocation();
//   const handleLoginButton = () => {
//     history.push('/signin');
//   };
//   return (
//     <Navbar
//       collapseOnSelect
//       expand='lg'
//       bg='white'
//       variant='white shadow fixed-top '>
//       <div className='container'>
//         <Navbar.Brand>
//           <Link to='/' className='nav-link-brand'>
//             Agwate SeekerLand
//           </Link>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls='responsive-navbar-nav' />
//         <Navbar.Collapse id='responsive-navbar-nav'>
//           <Nav className='me-auto'>
//             <Link className='nav-link' to='/jobs'>
//               Job Search
//             </Link>
//             <Link className='nav-link' to='resume-builders'>
//               Resume Builders
//             </Link>
//             <Link className='nav-link' to='/recruiters'>
//               Recruiters
//             </Link>
//             <Link className='nav-link' to='/whf'>
//               Work From Home
//             </Link>
//             <Link className='nav-link' to='career-tips'>
//               Career Tips
//             </Link>
//             <Link className='nav-link' to='#'>
//               More
//             </Link>
//           </Nav>
//           <Nav>
//             <Link
//               className='nav-link'
//               to='/signin'
//               style={{ fontWeight: 'bold' }}>
//               SignIn
//             </Link>
//             <Link
//               className='nav-link'
//               to='/signin'
//               style={{ border: '1px solid black' }}>
//               Employers/Post Job
//             </Link>

//             {/* {location.pathname === '/seeker/account' ? (
//               <>
//                 <Dropdown
//                   onMouseLeave={() => setShowDropdown(false)}
//                   onMouseOver={() => setShowDropdown(true)}
//                   className='btn-signIn'>
//                   <Dropdown.Toggle id='dropdown-basic'>
//                     My Account
//                   </Dropdown.Toggle>

//                   <Dropdown.Menu show={showDropdown}>
//                     <Dropdown.Item href='#/action-1'>Profile</Dropdown.Item>
//                     <Dropdown.Item href='#/action-2'>Settings</Dropdown.Item>
//                     <Dropdown.Item href='#/action-2'>
//                       Update Phone
//                     </Dropdown.Item>
//                     <Dropdown.Item href='#/action-2'>Log Out</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </>
//             ) : (
//               <Dropdown
//                 onMouseLeave={() => setShowDropdown(false)}
//                 onMouseOver={() => setShowDropdown(true)}
//                 className='btn-signIn'>
//                 <Dropdown.Toggle id='dropdown-basic'>
//                   Sign In / Sign Up
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu show={showDropdown}>
//                   <Dropdown.Item onClick={handleLoginButton}>
//                     Seeker Sign In
//                   </Dropdown.Item>
//                   <Dropdown.Item>Recruiter Sign In</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             )} */}
//           </Nav>
//         </Navbar.Collapse>
//       </div>
//     </Navbar>
//   );
// };

// export default Header;
