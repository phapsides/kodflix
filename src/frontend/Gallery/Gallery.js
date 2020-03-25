import React, {Component} from 'react';
import './Gallery.scss';
import Movie from './Movie/Movie'

export default class Gallery extends Component {

	constructor() {
		super();
		this.state = {
			movieDB: []
		};
	}

	componentDidMount() {
		fetch('/rest/shows')
			.then(res => res.json())
			.then(movieDB => this.setState({movieDB}));
	}

	render() {
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
		)
	}
}