import React from 'react';

const Signup = () => {
        
    return (
            <>
    <div className='main-container'>
      <h1>Inscription</h1>
        <form method='post'>
        <label>
Nom:
<input type="text" name="name" placeholder='Entrez votre nom'/>
</label>
        <label>
Prénom:
<input type="text" name="name" placeholder='Entrez votre prénom'/>
</label>
<label>
Email:
<input type="email" name="name" placeholder='Entrez votre email'/>
</label>
<label>
Choisir un mot de passe :
<input type="password" name="name" placeholder='Entrez un mot de passe'/>
</label>
<button>Créer un compte</button>
        </form>
        
    </div>
    </>
      
    );
};

export default Signup;