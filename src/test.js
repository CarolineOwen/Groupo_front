import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
const [pseudo, setPseudo] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] =useState('');
const [controlPassword, setControlPassword] =useState('');
const handleRegister = async (e)=>{
        e.preventDefault();
        const emailError = document.querySelector('.email-error');
        const pseudoError = document.querySelector('.pseudo-error');
        const passwordError = document.querySelector('.password-error');
        const controlPasswordError = document.querySelector('.passwordControl-error');
        controlPasswordError.innerHTML="";

        if(password !== controlPassword){
                controlPasswordError.innerHTML="Les mots de passe ne sont pas identiques, réessayez"
        }else{
                await axios(
                       {method:"post",
                       url: 'http://localhost:3000/api/auth/signup',
                       withCredentials: false,
                       data:{pseudo,
                        email, 
                        password,},
                }

                )
                .then((res)=>{
                        if(res.data.erros){
                                pseudoError.innerHTML = res.data.errors.pseudo;
                        emailError.innerHTML = res.data.errors.email;
                                passwordError.innerHTML = res.data.errors.password;
                               
                        }
                })
                .catch((err)=> console.log(err));

                }
        };


    return (
            <>
    <div className='main-container'>
      <h1>Inscription</h1>
        <form action="" onSubmit={handleRegister} id="signup" method='post'>
        <label htmlFor='pseudo'>Pseudo
            <input type="text" name="pseudo" id="pseudo" placeholder='Choisissez un pseudo' onChange={(e) =>
       setPseudo(e.target.value)} value={pseudo}/></label>
       <div className="pseudo-error"></div>

       <label htmlFor='email'>Email
            <input type="email" name="email" id="email" placeholder='Entrez votre email' onChange={(e) =>
       setEmail(e.target.value)} value={email}/></label>
       <div className="email-error"></div>

       <label htmlFor='password'>Mot de passe
            <input type="password" name="password" id="password" placeholder='Entrez un mot de passe' onChange={(e) =>
       setPassword(e.target.value)} value={password}/></label>
       <div className="password-error"></div>

       <label htmlFor='controlPassword'>Confirmez le mot de passe
            <input type="password" name="controlPassword" id="controlPassword" placeholder='Confirmez le mot de passe' onChange={(e) =>
       setControlPassword(e.target.value)} value={controlPassword}/></label>
       <div className="passwordControl-error"></div>


<input className='btn' type="submit" value="Valider l'inscription"/>
        </form>
        
    </div>
    </>
      
    );
};

export default Signup;