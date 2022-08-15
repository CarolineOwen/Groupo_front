import CreatePost from '../components/CreatePost';
import Posts from '../components/Posts';


//fonction qui affiche les posts des utilisateurs et qui leur permet de publier un message

const Home = () => {
    const ls = localStorage
    if (ls.length === 0) {
        return <h2>Veuillez vous connecter pour accéder au contenu</h2>
    }

    return (
        <div className='global'>
            <CreatePost />
            <Posts />
        </div>
    );
};

export default Home;