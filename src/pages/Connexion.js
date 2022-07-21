import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');
  

  const handleLogin =(e) =>{
e.preventDefault();
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');

axios({method:"post",
url: 'http://localhost:3000/api/auth/login',
withCredentials: false,
data:{email, 
  password,},
})
.then((res)=>{
if(res.data.errors){
  emailError.innerHTML = res.data.errors.email;
  passwordError.innerHTML = res.data.errors.password;

}else{
  window.location = '/home';
}
})
.catch((err)=>{
  console.log(err);
});
  };

    return (
    <>
        <div className='main-container'>
          <h1>Se connecter</h1>
            <form action="" onSubmit={handleLogin} id="login" method='post'>
            <label htmlFor='email'>Utilisateur:
            <input type="email" name="email" id="email" placeholder='Entrez votre email' onChange={(e) =>
       setEmail(e.target.value)} value={email}/></label>
       <div className="email-error"></div>
       <br/>
  
  <label htmlFor='password'>
    Mot de passe :
    <input type="password" name="password" id='password' placeholder='Entrez votre mot de passe'onChange={(e) =>
       setPassword(e.target.value)} value={password}/>
  </label>
  <div className="password-error"></div>
  <br/>
  <input className='btn' type="submit" value="Connexion"/>
            </form>
            <p>Pour creer un compte c'est par içi<a href="/signup"><i className="fa-solid fa-hand-pointer"></i></a></p>
        </div>
        </>
    );
};

export default Connexion;