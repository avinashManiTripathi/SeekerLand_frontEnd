import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import './filter.css';

const Filter = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isMobile = window.innerWidth < 700;

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
