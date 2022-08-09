import CreatePost from '../components/CreatePost';
import Posts from '../components/Posts';




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