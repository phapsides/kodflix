import React from 'react';
import './Movie.scss';
import iconStar from './../assets/star.svg';

export default function Movie(props) {
	return (
		<div className="Movie">
			<img src={props.image} alt={`${props.imageAlt} cover`} />
			<div className="data">
				<h1 className="movieTitle">{props.title}</h1>
				<p>Rating: <img className="icon-star" src={iconStar} alt="Rating star" />{props.rating}/10</p>
			</div>
		</div>
	)
}