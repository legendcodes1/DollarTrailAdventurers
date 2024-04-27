import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


interface StartModalProps {
  show: boolean;
  handleClose: () => void;
}

function ActionModal(props: StartModalProps) {
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
      <form>
       <label>
        Title:
      <input type="text" name="name" />
      <img />
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci odit voluptate sunt facere, dolore exercitationem quo </p>
     </label>
    </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleClose}>Card</Button>
        <Button onClick={props.handleClose}>Cash</Button>
      </Modal.Footer>
    </Modal>
  );
}
  export default ActionModal;
  