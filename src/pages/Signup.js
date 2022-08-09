import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
	const [pseudo, setPseudo] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [controlPassword, setControlPassword] = useState('');
	const controlPasswordError = document.querySelector('.passwordControl-error');





	const handleRegister = async (e) => {
		e.preventDefault();
		controlPasswordError.innerHTML = "";
		if (password !== controlPassword) {
			controlPasswordError.innerHTML = "Les mots de passe ne sont pas identiques, réessayez"
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
					console.log(res)
					const token = res.data.token;
					const userId = res.data.userId;
					const pseudo = res.data.pseudo;
					localStorage.setItem("token", token);
					localStorage.setItem("userId", userId);
					localStorage.setItem("pseudo", pseudo);
					console.log(token);
					window.location = '/home';

				})
				.catch((err) => {
					console.log(err)
					controlPasswordError.innerHTML = "*Au moins 6 caractères, 1 majuscule, 1 minuscule et 1 chiffre, ou format email invalide";
				});

		};
	}

	return (
		<>
			<div className='main-container'>
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
			</div>
		</>
	);
};

export default Signup;