import * as React from "react";
import "./index.css";
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
    <SidebarLink  icon={faIdCard} href="/a" />
    <SidebarLink  icon={faUserFriends} href="/b" />
    <SidebarLink  icon={faEnvelope} href="/c" />
    <SidebarLink  icon={faPlay} href="/d" />
    <SidebarLink  icon={faThList} href="/filmList" />
    <SidebarLink  icon={faCog} href="/e" />
    <div className="switch-block">
    <Switch />
    </div>
 
  </div>
);
