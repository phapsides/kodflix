import React, {Component} from 'react';
import './Gallery.scss';
import Movie from './Movie/Movie'

export default class Gallery extends Component {

	constructor() {
		super();
		this.state = {
			movie: []
		}
	}

	componentDidMount() {
		fetch('/rest/shows')
			.then(res => res.json())
			.then(movie => this.setState({movie}, () => console.log('Movies fetched...', movie)));
	}

	render() {
		return (
			<main className="Gallery container">
				{this.state.movie.map(movie =>
					<Movie
						key={movie.slug}
						slug={movie.slug}
						title={movie.title}
						synopsis={movie.synopsis}
					/> 
				)}
			</main>
		)
	}
}