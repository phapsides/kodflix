import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import getMovies from './Gallery/getMovies';

export default class Details extends Component {

	constructor() {
		super();
		this.state = {
			movie: {}
		}
	}

	componentDidMount() {
		let movieSlug = this.props.match.params.slug;
		let movieObject = getMovies().find(function (movie) {
			return movie.slug === movieSlug;
		});

		this.setState({
			movie: movieObject
		});
	}

	render() {
		return (
			<section>
				<h1>{this.state.movie.title}</h1>
				<Link to='/'> &#60; button </Link>
			</section>
		)
	}
}
