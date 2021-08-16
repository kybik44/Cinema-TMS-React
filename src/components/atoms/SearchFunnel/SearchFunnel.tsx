import "./index.css";
import Funnel from "../../../public/images/funnel.svg";

export const SearchFunnel = () => (
  <button className="funnel-btn">
    <img className="funnel-img" src={Funnel} alt="Search funnel" />
  </button>
);
