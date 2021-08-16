import * as React from "react";
import "./index.css";

interface IPoster {
  src: string;
  width: string;
  height: string;
  isSmallCard: boolean;
}

export const Poster = ({ src, width, height, isSmallCard }: IPoster) => (
  <div className="img-container">
    <img
      src={src}
      alt="Poster"
      width={width}
      height={height}
      className={isSmallCard ? "small-img" : "big-img"}
    />
  </div>
);
