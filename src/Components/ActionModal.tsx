import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Styles/modals.css";
import dollarTrailImage from "../Images/Book.png";
interface ActionModalProps {
  show: boolean;
  handleClose: () => void;
  image: string;
  description: string;
}

function ActionModal(props: ActionModalProps) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="myModal"
    >
      <Modal.Header className="header center">
        <Modal.Title id="contained-modal-title-vcenter">
          <img src={require(`../Images/Book.png`)} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mBody center"></Modal.Body>
      <Modal.Body className="mBody center">
        <div className="desc">
          Welcome to Dollar Trail Adventures where you start out with a certain amount of money and 
          have to make decesions on certain events.
        </div>
      </Modal.Body>
      <Modal.Footer className="footer center">
        <Button onClick={props.handleClose}>Continue</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ActionModal;
