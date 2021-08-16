import "./index.css";
import avatar from "../../../public/images/avatar.svg";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface IProfileLine {
  name: string;
}

export const ProfileLine = ({ name }: IProfileLine) => (
  <div className="profile-line">
    <p className="user-name">{name}</p>
    <span className="user-avatar">
      <a href="#">
        <img src={avatar} alt="Avatar" />
      </a>
    </span>

    <div className="dropdown">
      <button className="dropbtn">
        <FontAwesomeIcon className="icon" icon={faAngleDown} />
      </button>
      <div className="dropdown-content">
        <a href="#">Profile</a>
        <a href="#">Settings</a>
        <a href="#">Sign out</a>
      </div>
    </div>
  </div>
);
