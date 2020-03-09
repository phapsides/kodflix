import React from 'react';
import Movie from './Movie/Movie'
import lastSamurai from './assets/covers/the-last-samurai.jpg';
import troy	from './assets/covers/troy.jpg';
import marcoPolo from './assets/covers/marco-polo.jpg';
import theLastKingdom from './assets/covers/the-last-kingdom.jpg';
import blackDeath from './assets/covers/black-death.jpg';
import ipMan from './assets/covers/ip-man.jpg';

export default function Gallery(props) {
	return (
		<React.Fragment>
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
		</React.Fragment>
	)
}