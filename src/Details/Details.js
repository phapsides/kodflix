import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import getMovies from './../Gallery/getMovies';
import './Details.scss';


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
		if(this.state.movie === undefined) {
			return (
				<Redirect to='/not-found' />
			)
		} else {
			return (
				<main className="Details">
					<h1>{this.state.movie.title}</h1>
					<div className="movieDetails">
						<img src={this.state.movie.image} alt={this.state.movie.imageAlt} />
						<div className="data">
							<p>{this.state.movie.synopsis}</p>
						</div>
					</div>
				</main>
			)
		}
	}
}