import * as React from "react";
import { Title } from "../../atoms/Title";
import "./index.css";

interface IRaitingCard {
  raiting: string;
}
export const RaitingCard = ({ raiting }: IRaitingCard) => (
  <div className="raiting-card">
    <Title className="raiting-title title" title="Add raiting" />
    
	<div className="rating rating2">
		<a href="#10" title="Give 10 stars">★</a>
		<a href="#9" title="Give 9 stars">★</a>
		<a href="#8" title="Give 8 stars">★</a>
		<a href="#7" title="Give 7 stars">★</a>
		<a href="#6" title="Give 6 stars">★</a>
		<a href="#5" title="Give 5 stars">★</a>
		<a href="#4" title="Give 4 stars">★</a>
		<a href="#3" title="Give 3 stars">★</a>
		<a href="#2" title="Give 2 stars">★</a>
		<a href="#1" title="Give 1 star">★</a>
	</div>
    <button className="raiting-button">Add raiting</button>
  </div>
);
