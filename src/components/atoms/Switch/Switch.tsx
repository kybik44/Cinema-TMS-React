import React, { useState } from "react";
import "./index.css";
interface ISwitch {
  switchStatus: boolean;
  onChangeSwitchStatus: any;
}
export const Switch = ({ switchStatus, onChangeSwitchStatus }: ISwitch) => {
  return (
    <div className="toggle-btn" id="_1st-toggle-btn">
      <input
        type="checkbox"
        onChange={() => onChangeSwitchStatus(switchStatus)}
      ></input>
      <span></span>
    </div>
  );
};
