import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Styles/modals.css";
interface barProps {
  balance: number;
  subCost: number;
  invCost: number;
}
function SideBar(props: barProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Debt Card
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="sideBarHeader" closeButton>
          <Offcanvas.Title>Your Card Summary! </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="sideBarBody">
          Balance: ${props.balance}
        </Offcanvas.Body>
        <Offcanvas.Body className="sideBarBody">
          Subscription Costs: ${props.subCost}
        </Offcanvas.Body>
        <Offcanvas.Body className="sideBarBody">
          Investment Gains: ${props.invCost}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
