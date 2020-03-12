import React from 'react';
import './Gallery.scss';
import Movie from './Movie/Movie'
import getMovies from './getMovies'

export default function Gallery(props) {
	return (
		<section className="Gallery">
			{
				getMovies().map(movie => (
					<Movie
						key={movie.slug}
						slug={movie.slug}
						title={movie.title}
						image={movie.image}
						imageAlt={movie.imageAlt}
						rating={movie.rating}
					/> 
				))
			}
		</section>
	)
}