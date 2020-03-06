import React from 'react';
import Movie from './Movie/Movie';
import './App.scss';
import kodflixLogo from './images/kodflix-logo.png';
import lastSamurai from './Movie/assets/movie-covers/the-last-samurai.jpg';
import troy	from './Movie/assets/movie-covers/troy.jpg';
import marcoPolo from './Movie/assets/movie-covers/marco-polo.jpg';
import theLastKingdom from './Movie/assets/movie-covers/the-last-kingdom.jpg';
import blackDeath from './Movie/assets/movie-covers/black-death.jpg';
import ipMan from './Movie/assets/movie-covers/ip-man.jpg';

function App() {
  	return (
		<div className="App">
			<header>
				<img src={kodflixLogo} className="logo" alt="Kodflix logo" />
			</header>
			
			<section className="movieList">
				<Movie 
					title="The Last Samurai" 
					image={lastSamurai}
					imageAlt="The Last Samurai"
					rating='7.7' 
				/>
				<Movie 
					title="Troy" 
					image={troy}	
					imageAlt="Troy" 
					rating='7.2'
				/>	
				<Movie 
					title="Marco Polo" 
					image={marcoPolo}
					imageAlt="Marco Polo"
					rating='8.0'
				/>
				<Movie 
					title="The Last Kingdom" 
					image={theLastKingdom}
					imageAlt="The Last Kingdom" 
					rating='8.3'
				/>
				<Movie 
					title="Black Death" 
					image={blackDeath}
					imageAlt="Black Death"
					rating='6.4'
				/>
				<Movie 
					title="Ip Man" 
					image={ipMan}
					imageAlt="Ip Man"
					rating='8.0'
				/>
			</section>
		</div>
  	);
}

export default App;
