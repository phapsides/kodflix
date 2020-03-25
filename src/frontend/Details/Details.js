import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Details.scss';
import Loader from './../Loader/Loader';


export default class Details extends Component {

	constructor() {
		super();
		this.state = {
			movieDB: [],
			isLoaded: false
		}
	}

	componentDidMount() {
		fetch('/rest/shows')
			.then((response) => {
				return response.json();
			})
			.then((movieDB) => {
				let movieId = this.props.match.params.movieId;
				let movie = movieDB.find(movie => movie.id === movieId);
				this.setState({
					movie,
					isLoaded: true
				})
			});
	}

	render() {
		if (!this.state.isLoaded) {
			return (
				<Loader />
			);
		} else if (!this.state.movie) {
			return (
				<Redirect to='/not-found' />
			);
		} else {
			return (
				<article className="Details">
					<main className="container">
						<div className="grid movie">
							<div className="movie-image">
								<img src={require(`./../common/images/${this.state.movie.image}`)} alt={`${this.state.movie.title}} cover`} />
							</div>
							<div className="data">
								<h1>{this.state.movie.title}</h1>
								<h3>Rating:</h3>
								<p className="description">
									{this.state.movie.synopsis}
								</p>
								<button className="watch-now">Watch now!</button>
							</div>
						</div>
					</main>
				</article>
			);
		}
	}
}