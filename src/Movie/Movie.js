import React from 'react';

export default function Movie(props) {
	return (
		<div className="movie">
			<h3 className="movieTitle">{props.title}</h3>
			<img src={props.image} alt={`${props.imageAlt} cover`} />
		</div>
	)
}