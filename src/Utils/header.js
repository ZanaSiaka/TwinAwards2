import React from "react";
import logo from '../Assets/Logo/logoOriginal.svg'
import { Link } from 'react-router-dom'
const Header = () => {

	return(
		<nav className="navBarre">
			<img src={logo} alt="logoTwinAward" />
			<ul className="list-group">
				<li className="list-group-item"><Link className='link-list-group' to="/">Présentation des awards</Link></li>
				<li className="list-group-item"><Link className='link-list-group' to='/'>Vote</Link></li>
				<li className="list-group-item"><Link className='link-list-group' to="/">ChatBox</Link></li>
				<li className="list-group-item"><Link className='link-list-group' to="/">À propos</Link></li>
			</ul>
			<div className="linkToConnectDiv">
				<Link to="/" className="linkToConnect">Connexion</Link>
			</div>
		</nav>
	)
}

export default Header