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
interface ISidebar {
  switchStatus: boolean;
  onChangeSwitchStatus: any;
}
export const Sidebar = ({ switchStatus, onChangeSwitchStatus }: ISidebar) => (
  <div className="sidebar">
    <SidebarLink icon={faHome} href="/movieCard" />
    <SidebarLink icon={faIdCard} href="/a" />
    <SidebarLink icon={faUserFriends} href="/b" />
    <SidebarLink icon={faEnvelope} href="/c" />
    <SidebarLink icon={faPlay} href="/d" />
    <SidebarLink icon={faThList} href="/filmList" />
    <SidebarLink icon={faCog} href="/n" />
    <div className="switch-block">
      <Switch
        switchStatus={switchStatus}
        onChangeSwitchStatus={onChangeSwitchStatus}
      />
    </div>
  </div>
);
