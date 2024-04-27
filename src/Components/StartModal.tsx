import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface StartModalProps {
  show: boolean;
  handleClose: () => void;
}

function StartModal(props: StartModalProps) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dollar Trail Adventures
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> Welcome to Dollar Trail Adventures where you will simulate how your finance adventure proceeds. To begin please enter your email.</p>
        <label className="startlabel"> Email</label>
        <input type="text" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleClose}>Card</Button>
        <Button onClick={props.handleClose}>Cash</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StartModal;
