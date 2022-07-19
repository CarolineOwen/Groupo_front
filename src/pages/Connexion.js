import React from 'react';


const Connexion = () => {
    return (<>
    
        <div className='main-container'>
          <h1>Se connecter</h1>
            <form method='post'>
            <label>
    Utilisateur:
    <input type="email" name="name" />
  </label>
  <label>
    Mot de passe :
    <input type="text" name="name" />
  </label>
  <button>Connexion</button>
            </form>
            <p>Pour creer un compte c'est par içi<a href="#"><i class="fa-solid fa-hand-pointer"></i></a></p>
        </div>
        </>
    );
};

export default Connexion;