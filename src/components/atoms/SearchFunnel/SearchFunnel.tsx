import "./index.css";
import Funnel from "../../../public/images/funnel.svg";
import { Link } from "react-router-dom";
export const SearchFunnel = () => (
  <Link to="/filterPage">
   <button className="funnel-btn">
    <img className="funnel-img" src={Funnel} alt="Search funnel" />
  </button>
  </Link>

  
 
);
