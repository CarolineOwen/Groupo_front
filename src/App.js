
import Header from './components/Header';
import Footer from './components/Footer';
import Connexion from './pages/Connexion';
import Home from './pages/Home';
import Error from './components/Error';
import {Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';


function App() {
  return (
    <div>
<Header/>
<Routes>
<Route path ='/' element={<Connexion/>}/>
<Route path ='/signup' element={<Signup/>}/>
<Route path ='/home' element={<Home/>}/>
<Route path ='/*' element={<Error/>}/>
</Routes>
<Footer/>
    </div>
  );
}

export default App;
