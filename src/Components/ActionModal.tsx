import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Styles/modals.css";
import dollarTrailImage from "../Images/Book.png";
interface ActionModalProps {
  show: boolean;
  handleClose: (accepted: boolean) => void;
  image: string;
  description: string;
}

function ActionModal(props: ActionModalProps) {
  return (
    <Modal
      show={props.show}
      onHide={() => props.handleClose(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="myModal"
    >
      <Modal.Header className="header center">
        <Modal.Title id="contained-modal-title-vcenter">
          <img src={require(`../Images/${props.image}`)} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mBody center"></Modal.Body>
      <Modal.Body className="mBody center">
        <div className="desc"> {props.description}</div>
      </Modal.Body>
      <Modal.Footer className="footer center">
        <Button className="btn" onClick={() => props.handleClose(true)}>
          Yes
        </Button>
        <Button className="btn" onClick={() => props.handleClose(false)}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ActionModal;
