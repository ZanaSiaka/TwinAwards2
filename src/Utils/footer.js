import { Link } from "react-router-dom/"
import logo from '../Assets/Logo/logoOriginal.svg'

const Footer = () => {
	return(
		<footer className="footer">
			<img src={logo} alt="logoFooterTwin"/>
			<ul>
				<li><Link className="footerLink" to="/">Presentation des awards</Link></li>
				<li><Link className="footerLink" to="/">Vote</Link></li>
				<li><Link className="footerLink" to="/">ChatBox</Link></li>
				<li><Link className="footerLink" to="/">À propos</Link></li>
			</ul> <hr />
			<p>&copy; 2024 TwinAwards. Tous droits reservés.</p>
		</footer>
	)
}

export default Footer