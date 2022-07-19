import React from 'react';

const Signup = () => {
    return (
        <div>
            <>
    <div className='main-container'>
      <h1>Inscription</h1>
        <form method='post'>
        <label>
Nom:
<input type="text" name="name" />
</label>
        <label>
Prénom:
<input type="text" name="name" />
</label>
<label>
Email:
<input type="email" name="name" />
</label>
<label>
Choisir un mot de passe :
<input type="password" name="name" />
</label>
<button>Créer un compte</button>
        </form>
        
    </div>
    </>
        </div>
    );
};

export default Signup;