import * as React from "react";
import { Title } from "../../atoms/Title";
import "./index.css";

interface ITrailerCard {
  trailer: string;
  title: string;
  description: string;
}
export const TrailerCard = ({ trailer, title, description }: ITrailerCard) => (
  <div className="trailer-card">
    <Title className="trailer-title title" title={title} />
    <div className="trailer-video-container">
      <iframe
        className="trailer-video"
        src={trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="trailer-description">
      <p className="description-text text">{description}</p>
    </div>
  </div>
);
