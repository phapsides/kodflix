import React from 'react';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import Details from './Details';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.scss';

function App() {
  	return (
		<Router>
			<div className="App">
				<Header />
				
				<main>
					<Route exact path="/" component={Gallery} />
					<Route exact path="/:slug" component={Details} />
				</main>

				<footer>
					
				</footer>
			</div>
		</Router>
  	);
}


export default App;
