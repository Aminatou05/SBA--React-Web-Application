import { Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './PokemonDetails';
import './App.css'
import Header from './components/Header';


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
      </div>
  );
};

export default App;


