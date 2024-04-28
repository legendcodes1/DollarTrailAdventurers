import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Styles/modals.css";

interface BeginModalProps {
  show: boolean;
  startGame: () => void;
}

function BeginModal(props: BeginModalProps) {
  return (
    <Modal
      show={props.show}
      onHide={props.startGame}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="myModal"
    >
      <Modal.Header className="header center">
        <Modal.Title id="contained-modal-title-vcenter">
          How To Play
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="mBody left">
        <p></p>
        <ul className="tutorial-list">
          <li className="tutorial-list-items">- Answer Honestly</li>
          <li>- You will start with $50</li>
          <li>- You can check your balance after the event is done, not during</li>
        </ul>
      </Modal.Body>
      <Modal.Footer className="footer center">
        <Button className="btn" onClick={props.startGame}>
          I'm Ready
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default BeginModal;
