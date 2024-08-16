import { Link } from "react-router-dom";

const Connexion = () => {
	return(
		<>
			<h1>Connectez-vous</h1>
			<form>
				<input type="text" placeholder="Matricule" name="matricule" />
				<input type="password" placeholder="Mot de passe" name="password" />

				<button>Se connecter</button>
			</form>
			<span>Êtes vous administrateur ?<Link className='adminLog' to='/'> Si oui, cliquez ici !</Link> </span>
		</>
	)}

export default Connexion