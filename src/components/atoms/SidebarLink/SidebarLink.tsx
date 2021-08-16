import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
interface ISidebarLink {
  icon: any;
  href: string;
}

export const SidebarLink = ({ icon, href }: ISidebarLink) => { 
  return (
      <NavLink className="sidebar-link" to={href} exact>
        <FontAwesomeIcon className="icon" icon={icon} />
      </NavLink>
  );
};
