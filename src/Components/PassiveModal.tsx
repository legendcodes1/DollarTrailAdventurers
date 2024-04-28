import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Styles/modals.css";
import dollarTrailImage from "../Images/Book.png";
interface PassiveModalProps {
  show: boolean;
  handleClose: () => void;
  image: string;
  description: string;
}

function PassiveModal(props: PassiveModalProps) {
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
        <img alt='logo' style={{ width: 100 }} src={String('Money.png')} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mBody center"></Modal.Body>
      <Modal.Body className="mBody center">
        <div className="desc"> {props.description}</div>
      </Modal.Body>
      <Modal.Footer className="footer center">
        <Button className="btn" onClick={props.handleClose}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default PassiveModal;
