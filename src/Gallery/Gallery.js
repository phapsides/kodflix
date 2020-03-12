import React from 'react';
import './Gallery.scss';
import Movie from './Movie/Movie'
import lastSamurai from './assets/covers/the-last-samurai.jpg';
import troy	from './assets/covers/troy.jpg';
import marcoPolo from './assets/covers/marco-polo.jpg';
import theLastKingdom from './assets/covers/the-last-kingdom.jpg';
import blackDeath from './assets/covers/black-death.jpg';
import ipMan from './assets/covers/ip-man.jpg';

export default function Gallery(props) {
	return (
		<section className="Gallery">
			<Movie
				slug="the-last-samurai"
				title="The Last Samurai" 
				image={lastSamurai}
				imageAlt="The Last Samurai"
				rating='7.7' 
			/>
			<Movie
				slug="troy"
				title="Troy" 
				image={troy}	
				imageAlt="Troy" 
				rating='7.2'
			/>	
			<Movie
				slug="marco-polo"
				title="Marco Polo" 
				image={marcoPolo}
				imageAlt="Marco Polo"
				rating='8.0'
			/>
			<Movie
				slug="the-last-kingdom"
				title="The Last Kingdom" 
				image={theLastKingdom}
				imageAlt="The Last Kingdom" 
				rating='8.3'
			/>
			<Movie
				slug="black-death"
				title="Black Death" 
				image={blackDeath}
				imageAlt="Black Death"
				rating='6.4'
			/>
			<Movie
				slug="ip-man"
				title="Ip Man" 
				image={ipMan}
				imageAlt="Ip Man"
				rating='8.0'
			/>
		</section>
	)
}