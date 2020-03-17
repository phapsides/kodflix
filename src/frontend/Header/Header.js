import React from 'react';
import { Link } from 'react-router-dom';
import kodflixLogo from './assets/kodflix-logo.png';
import './Header.scss';

export default function Header(props) {
	return (
		<header>	
            <Link to='/'>
			    <img src={kodflixLogo} className="logo" alt="Kodflix logo" />
            </Link>
		</header>
	)
}