import React, { useState } from 'react';
import { Spinner, Button, Form } from 'react-bootstrap';
const Search = (props) => {
  const [state, setState] = useState({
    buttonLoader: false,
  });

  const handleSearch = () => {
    setState({
      buttonLoader: true,
    });
  };

  return (
    <div className='job-search-container shadow bg-white'>
      <div className='row'>
        <div className='col-md-4'>
          <input
            type='text'
            placeholder='Keyword e.g(Job Title , Description , Tags)'
            className='form-control'></input>
        </div>
        <div className='col-md-3'>
          <Form.Select className='form-control' aria-label='Select Locations'>
            <option>Select Locations</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </Form.Select>
        </div>
        <div className='col-md-3'>
          <Form.Select className='form-control' aria-label='Select Experience'>
            <option>Select Experience</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </Form.Select>
        </div>
        <div className='col-md-2'>
          <Button
            className=' br-0 form-btn btn btn-danger'
            onClick={handleSearch}>
            {state.buttonLoader ? (
              <>
                Search{' '}
                <Spinner
                  as='span'
                  animation='border'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                />
              </>
            ) : (
              <>
                Search <i className='fa fa-search' />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Search;
