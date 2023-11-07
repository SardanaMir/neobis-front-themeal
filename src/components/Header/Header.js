import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className='header fl-ai-cen'>
        <Link to={{ pathname: '/'}}>
          <h1 className='header__title'>The Meal</h1>
        </Link>
      </div>
    );
  }
  
export default Header;