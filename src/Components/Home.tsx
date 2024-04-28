import SideBar from "./SideBar";
import "../Styles/modals.css";
import { Button } from "react-bootstrap";
interface HomeProps {
  changeTurn: () => void;
}
function Home(props: HomeProps) {
  return (
    <div className="homepage">

      <h2 className="title"> Home </h2>
      <p> { /* Finance Info Here*/ } </p>

      <div className="btn-container">
        <Button onClick={props.changeTurn}>Continue</Button>
        <SideBar />
      </div>
    </div>
  );
}

export default Home;
