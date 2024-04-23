import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav(props) {
  return (
    <div className='nav'>
      <Link to='/'>
        <div>Welcome page</div>
      </Link>
      <Link to='/pokemon/:id'>
        <div>Pokémons</div>
      </Link>
      <Link to="/about">
        <div>About Page</div>
      </Link>
    </div>
  )
}
