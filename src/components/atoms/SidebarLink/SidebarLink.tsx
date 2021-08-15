import React, { useState, useEffect } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
interface ISidebarLink {
  icon: any;
  href: string;
}

export const SidebarLink = ({ icon, href }: ISidebarLink) => {
  const [isClicked, setActive] = useState(false);
  const currentHref = window.location.href.slice(21);

 
  return (
    <a
      onClick={() => (setActive(!isClicked))} // pass the index
      className={isClicked ? "sidebar-link active" : "sidebar-link"}
    >
      <NavLink className="nav-link" to={href} exact>
        <FontAwesomeIcon className="icon" icon={icon} />
      </NavLink>
    </a>
  );
};
