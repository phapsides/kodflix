import React from 'react';
import './App.css';
import lastSamurai from './the-last-samurai.jpg';

function App() {
  	return (
		<div className="App">
			<h1>
				Welcome to Kodflix!
			</h1>
			<section className="favouriteMovie">
				<img src={lastSamurai} alt="The last samurai cover" />
			</section>
		</div>
  	);
}

export default App;
