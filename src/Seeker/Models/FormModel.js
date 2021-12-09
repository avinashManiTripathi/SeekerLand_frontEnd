import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const FormModel = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size={props.size}
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </div>
  );
};

export default FormModel;
