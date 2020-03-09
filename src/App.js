import React from 'react';
import Gallery from './Gallery/Gallery';
import './App.scss';
import kodflixLogo from './images/kodflix-logo.png';

function App() {
  	return (
		<div className="App">
			<header>	
				<img src={kodflixLogo} className="logo" alt="Kodflix logo" />
			</header>
			
			<section className="movieList">
				<Gallery />
			</section>
		</div>
  	);
}

export default App;
