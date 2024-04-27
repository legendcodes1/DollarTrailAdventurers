import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface StartModalProps {
  show: boolean;
  startGame: () => void;
}

function StartModal(props: StartModalProps) {
  return (
    <Modal
      show={props.show}
      onHide={props.startGame}
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
        <label>Email</label>
        <input type="text" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.startGame}>Start</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StartModal;
