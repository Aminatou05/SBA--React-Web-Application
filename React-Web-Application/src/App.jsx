import { Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './PokemonDetails';


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>

  );
};

export default App;


