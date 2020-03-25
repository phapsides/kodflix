import React, { Component } from 'react';
import './Gallery.scss';
import Movie from './Movie/Movie'
import Loader from './../Loader/Loader';

export default class Gallery extends Component {

	constructor() {
		super();
		this.state = {
			movieDB: [],
			isLoaded: false
		};
	}

	componentDidMount() {
		fetch('/rest/shows')
			.then(res => res.json())
			.then(movieDB => this.setState({
				movieDB, isLoaded: true
			})
			);
	}

	render() {
		if (!this.state.isLoaded) {
			return (
				<Loader />
			);
		} else {
			return (
				<main className="Gallery container">
					{this.state.movieDB.map(movie =>
						<Movie
							key={movie.slug}
							slug={movie.slug}
							image={movie.image}
							title={movie.title}
							synopsis={movie.synopsis}
						/>
					)}
				</main>
			);
		}
	}
}