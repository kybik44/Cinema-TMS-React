import * as React from "react";
import "./index.css";
import Vector from "../../../public/images/Vector.svg";
import { SidebarLink } from "../../atoms/SidebarLink/SidebarLink";
import {
  faHome,
  faUserFriends,
  faEnvelope,
  faPlay,
  faThList,
  faIdCard,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => (
  <div className="sidebar">
    <SidebarLink className="sidebar-link active" icon={faHome} href="#" />
    <SidebarLink className="sidebar-link" icon={faIdCard} href="#" />
    <SidebarLink className="sidebar-link" icon={faUserFriends} href="#" />
    <SidebarLink className="sidebar-link" icon={faEnvelope} href="#" />
    <SidebarLink className="sidebar-link" icon={faPlay} href="#" />
    <SidebarLink className="sidebar-link" icon={faThList} href="#" />
    <SidebarLink className="sidebar-link" icon={faCog} href="#" />
  </div>
);
