
import Header from './components/Header';
import Connexion from './pages/Connexion';
import Home from './pages/Home';
import ModifyPost from './pages/ModifyPost';
import Error from './components/Error';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Signup from './pages/Signup';
import { BrowserRouter } from 'react-router-dom';

//regroupe toutes les pages du site

function App() {

 
  return (
    <div className='global'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Connexion />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/ModifyPost/:_id' element={<ModifyPost />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
