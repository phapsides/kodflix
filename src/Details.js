import React, { Component} from 'react';
import { Link } from 'react-router-dom';

export default class Details extends Component {
	render() {
		return (
			<section>
				<h1>Hello, this will be the details page for each Movie & TV show.</h1>
				<Link to='/'> &#60; button </Link>
			</section>
		)
	}
}
