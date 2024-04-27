import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Styles/modals.css";
interface StartModalProps {
  show: boolean;
  startGame: () => void;
}

function StartModal(props: StartModalProps) {
  return (
    <Modal
      show={props.show}
      onHide={props.startGame}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="myModal"
    >
      <Modal.Header className="header center">
        <Modal.Title id="contained-modal-title-vcenter">
          <h1> Dollar Trail Adventures</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mBody center">
        <div className="desc">Description</div>
        <br />
        <br />
        <input type="text" hidden />
      </Modal.Body>
      <Modal.Footer className="footer center">
        <Button className="btn" onClick={props.startGame}>
          Start
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StartModal;
