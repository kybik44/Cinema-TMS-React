import * as React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface ISidebarLink {
  icon: any;
  href: string;
  className: string;
}

export const SidebarLink = ({ icon, href, className }: ISidebarLink) => (
  <a className={className} href={href}>
    <FontAwesomeIcon className="icon" icon={icon} />
  </a>
);
