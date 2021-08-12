import * as React from "react";
import "./index.css";

interface IPoster {
  src: string;
  width: string;
  height: string
}

export const Poster = ({ src, width, height }: IPoster) => (
  <img src={src} alt="Poster" width={width} height={height} />
);
