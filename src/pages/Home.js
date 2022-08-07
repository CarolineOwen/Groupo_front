import CreatePost from '../components/CreatePost';
import Posts from '../components/Posts';

const Home = () => {

    return (
        <div className='global'>
            <CreatePost />
            <Posts />
        </div>
    );
};

export default Home;