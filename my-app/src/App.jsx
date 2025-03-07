import './css/App.css';
import Home from './pages/Home';
import Favorite from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App() {
 
  return (
    <div>
      <MovieProvider>
    <NavBar/>
    <main className="main-content">
       
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element= {<Favorite/>}/>
      </Routes>
    </main> 
    </MovieProvider>
    </div>
  );
}

export default App;
