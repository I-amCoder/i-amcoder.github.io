import React from "react";
import { Modal, Button } from "react-bootstrap";
import Typist from "react-typist";
function ModalDialog({ title, content, isShow, invokeModal }) {
    const initModal=()=>{
        invokeModal(!isShow);
    }
  return (
    <>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Typist onTypingDone={()=>{
            setTimeout(initModal,2000)
          }}>{content}</Typist>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDialog;
