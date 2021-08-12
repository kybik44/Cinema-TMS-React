

import * as React from "react";
import "./index.css";
import Vector from '../../../public/images/Vector.svg'
interface ISidebar {
 
}

export const Sidebar = () => (
    <div class="sidebar">
  <a class="active" href="#home"><img src="/images/Vector.svg" alt="" /></a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
)