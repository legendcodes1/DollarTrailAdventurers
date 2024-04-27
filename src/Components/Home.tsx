import SideBar from "./SideBar"
import "../Styles/modals.css";
 function Home(){

    return(
        <div className="homepage"> 

        <h2> Financial Event</h2>
        <div className="btn-container"> 
        <button> Continue</button>
        <SideBar/>
        </div>

        </div>
    )
}


export default Home;