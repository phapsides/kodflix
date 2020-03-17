import lastSamurai from './assets/covers/the-last-samurai.jpg';
import troy	from './assets/covers/troy.jpg';
import marcoPolo from './assets/covers/marco-polo.jpg';
import theLastKingdom from './assets/covers/the-last-kingdom.jpg';
import blackDeath from './assets/covers/black-death.jpg';
import ipMan from './assets/covers/ip-man.jpg';

export default function getMovies() {
	return [
		{ 
			slug: 'the-last-samurai', 
			title: 'The Last Samurai', 
			image: lastSamurai, 
			imageAlt: 'The Last Samurai', 
			synopsis: 'Captain Nathan Algren is hired to train the Japanese army to fight a Samurai rebellion. He, however, ends up embracing the same Samurai culture which he was assigned to destroy.',
			rating: '7.7'
		},
		{ 
			slug: 'troy',
			title: 'Troy', 
			image: troy,
			imageAlt: 'Troy', 
			synopsis: 'After Paris, a prince of Troy, has an affair with Menelaus\'s wife, Helen, he decides to take her with him. Later, Menelaus\'s brother uses that as an excuse to wage war against the city of Troy.',
			rating: '7.2'
		},
		{ 
			slug: 'marco-polo', 
			title: 'Marco Polo', 
			image: marcoPolo, 
			imageAlt: 'Marco Polo', 
			synopsis: 'Venetian merchant and adventurer Marco Polo journeys across Europe and Asia and lands up as a prisoner in the palace of Kublai Khan, a 13th century Mongolian emperor.',
			rating: '8.0'
		},
		{ 
			slug: 'the-last-kingdom', 
			title: 'The Last Kingdom', 
			image: theLastKingdom, 
			imageAlt: 'The Last Kingdom', 
			synopsis: 'During their invasion of England, the Danes capture Uhtred, a young successor of Saxon earldom, and raise him as their own. Years later, Uhtred\'s loyalties are put to the test by the Danes.',
			rating: '8.3'
		},
		{ 
			slug: 'black-death', 
			title: 'Black Death', 
			image: blackDeath, 
			imageAlt: 'Black Death', 
			synopsis: 'When the bubonic plague breaks out in the city of England, killing hundreds of people, a monk decides to investigate a report, which states that some people are miraculously coming back to life.',
			rating: '6.4'
		},
		{ 
			slug: 'ip-man', 
			title: 'Ip Man', 
			image: ipMan, 
			imageAlt: 'Ip Man', 
			synopsis: 'The life story of Yip Man, the first person to teach the Chinese martial art of Wing Chun and Bruce Lee\'s trainer.',
			rating: '8.0'
		}
	]
}