import { Route, Routes } from 'react-router-dom';
// import PokemonDetails from './PokemonDetails';
import PokemonList from './components/PokemonList';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Nav from './components/Nav';
import './App.css'




const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/pokemon/:id" element={<PokemonList  />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
      </div>
  );
};

export default App;


