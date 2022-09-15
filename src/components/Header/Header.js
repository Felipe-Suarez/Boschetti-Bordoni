import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      <nav className='nav-container'>
        <div className='nav-menu'>
          <img className='nav-menu-img' src="" alt="" />
          <ul className='nav-menu-list'>
            <li>Servicios</li>
            <li>Valores</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;