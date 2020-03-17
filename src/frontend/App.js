import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import Details from './Details/Details';
import NotFound from './NotFound/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.scss';

function App() {
  	return (
		<Router>
			<div className="App">
				<Header />
				
				<Switch>
					<Route exact path="/" component={Gallery} />
					<Route exact path="/not-found" component={NotFound} />
					<Route exact path="/:slug" component={Details} />
				</Switch>

				<Footer />
			</div>
		</Router>
  	);
}


export default App;
