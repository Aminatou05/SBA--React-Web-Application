
import { Link } from 'react-router-dom';


export default function Nav(props) {
  return (
    <div className='nav'>
      <Link to='/'>
        <div>Welcome</div>
      </Link>
      <Link to='/pokemon/:id'>
        <div>Pokémon</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  )
}
