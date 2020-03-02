import React from 'react';
import './App.css';
import lastSamurai from './the-last-samurai.jpg';
import troy	from './troy.jpg'
import marcoPolo from './marco-polo.jpg'
import theLastKingdom from './the-last-kingdom.jpg'
import blackDeath from './black-death.jpg'
import ipMan from './ip-man.jpg'

function App() {
  	return (
		<div className="App">
			<h1>
				Welcome to Kodflix!
			</h1>
			<section className="movieList">
				
				<div class="movie">
					<img src={lastSamurai} alt="The last samurai cover" />
				</div>
				<div class="movie">
					<img src={troy} alt="Troy cover" />
				</div>
				<div class="movie">
					<img src={marcoPolo} alt="Marco Polo cover" />
				</div>
				<div class="movie">
					<img src={theLastKingdom} alt="The Last Kingdom cover" />
				</div>
				<div class="movie">
					<img src={blackDeath} alt="Black Death cover" />
				</div>
				<div class="movie">
					<img src={ipMan} alt="Ip Man cover" />
				</div>
			</section>
		</div>
  	);
}

export default App;
