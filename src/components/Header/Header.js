import React from 'react';
import { useState } from 'react';

import './header.css';
import './mediaQuerys.css'

import MenuIcon from './MenuIcon';

const Header = () => {

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <header>
      <nav className='nav-container' >
        <div className='nav-menu'>
          <div className='nav-menu-box'>
            <div className='nav-menu-title'>
              <div className='nav-menu-title-word b1'>Boschetti</div>
              <div className='nav-menu-title-word b2'>Bordoni</div>
              <img className='nav-menu-title-img' src="" alt="img" />
            </div>
          </div>
          <MenuIcon open={open} handleClick={handleClick} />
          <ul className={`nav-menu-list ${open ? 'menu-open' : ''}`}>
            <li className='nav-menu-link'><a href='#'>Servicios</a></li>
            <li className='nav-menu-link'><a href='#'>Valores</a></li>
            <li className='nav-menu-link'><a href='#'>Nosotros</a></li>
            <li className='nav-menu-link'><a href='#'>Contacto</a></li>
          </ul>
        </div>
      </nav >
    </header >
  )
}

export default Header;