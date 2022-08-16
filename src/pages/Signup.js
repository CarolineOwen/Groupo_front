import React, { useState } from 'react';
import axios from 'axios';


// fonction qui permet aux utilisateurs de créer un compte pour ensuite se connecter au réseau social

const Signup = () => {
	const [pseudo, setPseudo] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [controlPassword, setControlPassword] = useState('');
	const controlPasswordError = document.querySelector('.passwordControl-error');
	//controlPasswordError.innerHTML = "";

	const handleRegister = async (e) => {
		e.preventDefault();

		//declaration de la regex pour verifier l'emai
		let regex = new RegExp(
			"^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]{2,10}$"
		);
		if (password !== controlPassword) {
			return controlPasswordError.innerHTML = "Les mots de passe ne sont pas identiques, réessayez"
		}

		if (!regex.test(email)) {
			controlPasswordError.innerHTML = "Le format de l'email est invalide ou mail déjà pris"
		}

		else {
			axios(
				{
					method: "post",
					url: 'http://localhost:3000/api/auth/signup',

					data: {
						pseudo,
						email,
						password,
					},
				}

			)
				.then((res) => {
					const token = res.data.token;
					const userId = res.data.userId;
					const pseudo = res.data.pseudo;
					localStorage.setItem("token", token);
					localStorage.setItem("userId", userId);
					localStorage.setItem("pseudo", pseudo);
					window.location = '/home';

				})
				.catch((err) => {
					console.log(err)
					if (err.response.data.error === "Le mot de passe est insuffisant uppercase,digits") {
						controlPasswordError.innerHTML = "<div>*Au moins 6 caractères, 1 majuscule, 1 minuscule et 1 chiffre, ou format email invalide</div>";
					}
					if (err.response.data.error.errors.email) {
						controlPasswordError.innerHTML = "<div>L'email est déjà pris</div>";
					}
					else if (err.response.data.error.errors.pseudo.name === "ValidatorError"){
						controlPasswordError.innerHTML = "<div>Le pseudo est déjà pris</div>"
					}
				});

		};
	}

	return (
		<>
			<main className='main-container'>
				<h1>Inscription: </h1>
				<form action="" onSubmit={handleRegister} id="signup" method='post'>
					<label htmlFor='pseudo'>Pseudo:
						<input type="text" name="pseudo" id="pseudo" autoFocus placeholder='Choisissez un pseudo'
							onChange={(e) => setPseudo(e.target.value)} value={pseudo} required />
					</label>
					<div className="pseudo-error"></div>

					<label htmlFor='email'>Email:
						<input type="email" name="email" id="email" placeholder='Entrez votre email'
							onChange={(e) => setEmail(e.target.value)} value={email} required />
					</label>
					<div className="email-error"></div>

					<label htmlFor='password'>Mot de passe:
						<input type="password" name="password" id="password" placeholder='Entrez un mot de passe'
							onChange={(e) => setPassword(e.target.value)} value={password} required />
					</label>
					<div className="password-error"></div>

					<label htmlFor='controlPassword'>Confirmez le mot de passe:
						<input type="password" name="controlPassword" id="controlPassword" placeholder='Confirmez le mot de passe'
							onChange={(e) => setControlPassword(e.target.value)} value={controlPassword} required />
					</label>
					<div className="passwordControl-error"></div>

					<input className='btn' type="submit" value="Valider l'inscription" />
				</form>
			</main>
		</>
	);
};

export default Signup;