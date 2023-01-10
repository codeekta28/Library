import React from 'react';
import UpdateBook from './UpdateBook';
import { Modal, Button, Form } from 'react-bootstrap'
const UpdateBookModal = ({ show,closeModal,onHide, updateState,detail }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
     <UpdateBook updateState={updateState} detail={detail} closeModal={closeModal}/>
      </Modal.Body>
 
    </Modal>
  );
};

export default UpdateBookModal;
