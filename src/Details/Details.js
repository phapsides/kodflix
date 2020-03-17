import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import getMovies from './../Gallery/getMovies';
import './Details.scss';
// import iconStar from './../assets/star.svg';


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
				<article className="Details">
					<section className="heroImage" 
							 style={{backgroundImage: `url(${this.state.movie.image})`}}>		
					</section>
					<section className="movieDetails container">
						
							<h1>{this.state.movie.title}</h1>
							<p>{this.state.movie.synopsis}</p>
					
					</section>
				</article>
			)
		}
	}
}