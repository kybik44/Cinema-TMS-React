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
import { Switch } from "../../atoms/Switch/Switch";

export const Sidebar = () => (
  <div className="sidebar">
    <SidebarLink  icon={faHome} href="/" />
    <SidebarLink  icon={faIdCard} href="#" />
    <SidebarLink  icon={faUserFriends} href="#" />
    <SidebarLink  icon={faEnvelope} href="#" />
    <SidebarLink  icon={faPlay} href="#" />
    <SidebarLink  icon={faThList} href="/filmList" />
    <SidebarLink  icon={faCog} href="#" />
    <div className="switch-block">
    <Switch />
    </div>
 
  </div>
);
