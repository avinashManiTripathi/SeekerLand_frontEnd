import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import './filter.css';
import { filterData } from './filterData';

const Filter = (props) => {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState([]);

  const [jobType, setJobType] = useState([null]);
  // const [location, setLocatiion] = useState([]);
  const [salary, setSalary] = useState([null]);
  const [industries, setIndustries] = useState([null]);
  const [topCompanies, setTopCompanies] = useState([null]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isMobile = window.innerWidth < 700;

  const onInputClick = (e, title) => {

   
    setFilter([...filter,[e.target.name],e.target.value])
    console.log('filter ==' , filter)
  

      
      // url.push(location && 'location=', location,
      //  jobType && 'jobType=', jobType,
      //  salary && 'salary=', salary,
      //  industries && 'industries=', industries,
      //  topCompanies && 'topCompanies=', topCompanies);
      //  console.log(url.join(','))
      
      
      // console.log('location = ', location) 
      // console.log('Salary =   ', salary) 
      // console.log('industries = ', industries) 
      // console.log('topCompanies = ', topCompanies) 
      // console.log('Job Type = ', jobType) 

   
    // setFilter([...filter,{[e.target.name]: e.target.value}])
    // console.log('location ==' , filter)
    

   
  
    // console.log(url);
    // switch (title) {
    //   case 'Location':
    //     setLocatiion([...location, e.target.value]);
    //     url.push({"location":location.join(',')});
    //     break;
    //   case 'Job Type':
    //     setJobType([...jobType, e.target.value]);
    //     url.push({"jobType":jobType.join(',')});
    //     break;
    //   case 'Salary':
    //     setSalary([...salary, e.target.value]);
    //     url.push({"salary":salary.join(',')});
    //     break;
    //   case 'Industries':
    //     setIndustries([...industries, e.target.value]);
    //     url.push({"industries":industries.join(',')});
    //     break;
    //   case ' Top Companies':
    //     setTopCompanies([...topCompanies, e.target.value]);
    //     url.push({"topCompanies":topCompanies.join(',')});
    //     break;
    // }
  };

  return (
    <div>
      {!isMobile ? (
        <section
          className='sidebar bg-white mb-2'
          style={{
            padding: '20px 30px',
          }}>
          <div className='border-bottom '>
            <h4 id='burgundy'>Filters</h4>
          </div>

          {filterData &&
            filterData.map((element) => {
              return (
                <div className='py-2 border-bottom ml-3' key={element.id}>
                  <h6 className='font-weight-bold'>{element.title}</h6>
                  <div id='orange'>
                    <span className='fa fa-minus'></span>
                  </div>
                  <form>
                    {element.data &&
                      element.data.map((subData) => {
                        return (
                          <div key={subData.id} className='form-group'>
                            <input
                              type='checkbox'
                              value={subData.name}
                              name={element.title}
                              onClick={(e) => onInputClick(e, element.title)}
                            />{' '}
                            <label>{subData.name}</label>{' '}
                          </div>
                        );
                      })}
                  </form>
                </div>
              );
            })}
        </section>
      ) : (
        <>
          <Button
            variant='primary'
            onClick={handleShow}
            className='fixed-bottom float-right m-2'
            style={{ float: 'right' }}>
            <i className='fa fa-filter' aria-hidden='true'></i>
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <section
                className='sidebar bg-white  mb-2'
                style={{
                  padding: '20px 30px',
                }}>
                <div className='py-2 border-bottom ml-3'>
                  <h6 className='font-weight-bold'>Work from Home</h6>
                  <div id='orange'>
                    <span className='fa fa-minus'></span>
                  </div>
                  <form>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='artisan' />{' '}
                      <label for='artisan'>WHF During COVID-19 (342)</label>{' '}
                    </div>
                  </form>
                </div>

                <div className='py-2 border-bottom ml-3'>
                  <h6 className='font-weight-bold'>Location</h6>
                  <div id='orange'>
                    <span className='fa fa-minus'></span>
                  </div>
                  <form>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='artisan' />{' '}
                      <label for='artisan'>Noida</label>{' '}
                    </div>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='breakfast' />{' '}
                      <label for='breakfast'>New Delhi </label>{' '}
                    </div>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='healthy' />{' '}
                      <label for='healthy'>Haryana</label>{' '}
                    </div>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='breakfast' />{' '}
                      <label for='breakfast'>Mumbai</label>{' '}
                    </div>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='healthy' />{' '}
                      <label for='healthy'>Lucknow</label>{' '}
                    </div>
                  </form>
                </div>
                <div className='py-2 border-bottom ml-3'>
                  <h6 className='font-weight-bold'>Salary</h6>
                  <div id='orange'>
                    <span className='fa fa-minus'></span>
                  </div>
                  <form>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='tea' />{' '}
                      <label for='tea'>1 - 2 Lakh</label>{' '}
                    </div>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='cookies' />{' '}
                      <label for='cookies'>2 - 3 Lakh</label>{' '}
                    </div>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='pastries' />{' '}
                      <label for='pastries'>3 - 4 Lakh</label>{' '}
                    </div>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='dough' />{' '}
                      <label for='dough'>4 - 5 Lakh</label>{' '}
                    </div>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='choco' />{' '}
                      <label for='choco'>5 - 10 Lakh</label>{' '}
                    </div>
                  </form>
                </div>
                <div className='py-2  border-bottom ml-3'>
                  <h6 className='font-weight-bold'>Job Type</h6>
                  <div id='orange'>
                    <span className='fa fa-minus'></span>
                  </div>
                  <form>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='25off' />{' '}
                      <label for='25'>Premium Engg(890)</label>{' '}
                    </div>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='5off' />{' '}
                      <label for='5off' id='off'>
                        International(5){' '}
                      </label>
                    </div>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='25off' />{' '}
                      <label for='25'>PSU/Government(1)</label>{' '}
                    </div>
                    <div className='form-group'>
                      {' '}
                      <input type='checkbox' id='5off' />{' '}
                      <label for='5off' id='off'>
                        Premium MBA(1){' '}
                      </label>
                    </div>
                  </form>
                </div>

                <div className='py-2 border-bottom ml-3'>
                  <h6 className='font-weight-bold'>Industries</h6>
                  <div id='orange'>
                    <span className='fa fa-minus'></span>
                  </div>
                  <form>
                    <div className='form-group'>
                      <input type='checkbox' id='artisan' />{' '}
                      <label for='artisan'>Post Graduation(688)</label>{' '}
                    </div>
                    <div className='form-group'>
                      <input type='checkbox' id='artisan' />{' '}
                      <label for='artisan'>Any Postgraduate(1033)</label>{' '}
                    </div>
                    <div className='form-group'>
                      <input type='checkbox' id='artisan' />{' '}
                      <label for='artisan'>Any Graduate(547)</label>{' '}
                    </div>
                    <div className='form-group'>
                      <input type='checkbox' id='artisan' />{' '}
                      <label for='artisan'>Management Consulting(8)</label>{' '}
                    </div>
                  </form>
                </div>

                <div className='py-2 border-bottom ml-3'>
                  <h6 className='font-weight-bold'>Top Companies</h6>
                  <div id='orange'>
                    <span className='fa fa-minus'></span>
                  </div>
                  <form>
                    <div className='form-group'>
                      <input type='checkbox' id='artisan' />{' '}
                      <label for='artisan'>Virtusa (450)</label>{' '}
                    </div>
                    <div className='form-group'>
                      <input type='checkbox' id='artisan' />{' '}
                      <label for='artisan'>TCS(320)</label>{' '}
                    </div>
                    <div className='form-group'>
                      <input type='checkbox' id='artisan' />{' '}
                      <label for='artisan'>Wipro(320)</label>{' '}
                    </div>
                    <div className='form-group'>
                      <input type='checkbox' id='artisan' />{' '}
                      <label for='artisan'>HCL(540)</label>{' '}
                    </div>
                  </form>
                </div>
              </section>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </div>
  );
};
export default Filter;
