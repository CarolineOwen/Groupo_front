import React from 'react';
import Posts from '../components/Posts';
import Thread from '../components/Thread';
import Hook from './test2';


const Home = () => {
    return (
        <div>
            <h1>Bonjour tout le monde</h1>
            <textarea placeholder="Ecrivez quelque chose ici"/>
            <button>Click</button>
            <Posts/>
        </div>
    );
};

export default Home;