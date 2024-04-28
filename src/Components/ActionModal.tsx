import React from "react";
import { motion } from "framer-motion";
import { Button, Modal } from "react-bootstrap";
import "../Styles/modals.css";
import dollarTrailImage from "../Images/Book.png";

interface ActionModalProps {
  show: boolean;
  handleClose: (accepted: boolean) => void;
  image: string;
  description: string;
}

const ActionModal: React.FC<ActionModalProps> = (props) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const text = props.description.split(" ");

  return (
    <Modal
      show={props.show}
      onHide={() => props.handleClose(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="myModal"
    >
      <motion.div
        className="modal-content"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
      >
        <Modal.Header className="header center">
          <Modal.Title id="contained-modal-title-vcenter">
            <img src={require(`../Images/${props.image}`)} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mBody center"></Modal.Body>
        <Modal.Body className="mBody center">
          <div className="desc">
            {text.map((el, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
              >
                {el}{" "}
              </motion.span>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer className="footer center">
          <Button className="btn" onClick={() => props.handleClose(true)}>
            Yes
          </Button>
          <Button className="btn" onClick={() => props.handleClose(false)}>
            No
          </Button>
        </Modal.Footer>
      </motion.div>
    </Modal>
  );
};

export default ActionModal;
