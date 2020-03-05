import React from 'react';
import Movie from './Movie/Movie';
import './App.css';
import kodflixLogo from './images/kodflix-logo.png';
import lastSamurai from './Movie/covers/the-last-samurai.jpg';
import troy	from './Movie/covers/troy.jpg';
import marcoPolo from './Movie/covers/marco-polo.jpg';
import theLastKingdom from './Movie/covers/the-last-kingdom.jpg';
import blackDeath from './Movie/covers/black-death.jpg';
import ipMan from './Movie/covers/ip-man.jpg';

function App() {
  	return (
		<div className="App">

			<img src={kodflixLogo} className="logo" alt="Kodflix logo" />
			
			<section className="movieList">
				<Movie 
					title="The Last Samurai" 
					image={lastSamurai}
					imageAlt="The Last Samurai" 
				/>
				<Movie 
					title="Troy" 
					image={troy}	
					imageAlt="Troy" 
				/>	
				<Movie 
					title="Marco Polo" 
					image={marcoPolo}
					imageAlt="Marco Polo" 
				/>
				<Movie 
					title="The Last Kingdom" 
					image={theLastKingdom}
					imageAlt="The Last Kingdom" 
				/>
				<Movie 
					title="Black Death" 
					image={blackDeath}
					imageAlt="Black Death" 
				/>
				<Movie 
					title="Ip Man" 
					image={ipMan}
					imageAlt="Ip Man" 
				/>
			</section>
		</div>
  	);
}

export default App;
