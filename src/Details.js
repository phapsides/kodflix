import React, { Component} from 'react';
import { Link } from 'react-router-dom';

export default class Details extends Component {

	constructor() {
		super();
		this.state = {
			message: 'Hello, this will be the details page for each Movie & TV show.'
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				message: 'Coming soon!'
			});
		}, 3000);
	}

	render() {
		return (
			<section>
				<h1>{this.state.message}</h1>
				<Link to='/'> &#60; button </Link>
			</section>
		)
	}
}
