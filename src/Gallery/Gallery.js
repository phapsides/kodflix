import React from 'react';
import './Gallery.scss';
import Movie from './Movie/Movie'
import getMovies from './getMovies'

export default function Gallery(props) {
	return (
		<main className="Gallery container">
			{
				getMovies().map(movie => (
					<Movie
						key={movie.slug}
						slug={movie.slug}
						title={movie.title}
						image={movie.image}
						imageAlt={movie.imageAlt}
						synopsis={movie.synopsis}
						rating={movie.rating}
					/> 
				))
			}
		</main>
	)
}