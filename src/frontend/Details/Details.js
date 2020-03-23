import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
// import getMovies from '../Gallery/getMovies';
import './Details.scss';


export default class Details extends Component {

	constructor() {
		super();
		this.state = {
			movie: []
		}
	}

	componentDidMount() {
		// let movieSlug = this.props.match.params.slug;
		// let movieObject = getMovies().find(function (movie) {
		// 	return movie.slug === movieSlug;
		// });

		// this.setState({
		// 	movie: movieObject
		// });

		fetch('/rest/shows')
			.then(res => res.json())
			.then(movie => this.setState({movie}, () => console.log('Movies fetched...', movie), () => console.log('Movies fetched...', movie)));
	}

	render() {
		if(this.state.movie === undefined) {
			return (
				<Redirect to='/not-found' />
			)
		} else {
			return (
				<article className="Details">
					<main className="container">
						<div className="grid movie">
							<div className="movie-image">
								<img src={this.state.movie.image} alt={this.state.movie.imageAlt} />
							</div>
							<div className="data">
								<h1>{this.state.movie.title}</h1>
								{/* <h3>Rating</h3> */}
								<div className="description">
									<p>{this.state.movie.synopsis}</p>
								</div>
								<button className="watch-now">Watch now!</button>
							</div>
						</div>
					</main>
				</article>
			)
		}
	}
}