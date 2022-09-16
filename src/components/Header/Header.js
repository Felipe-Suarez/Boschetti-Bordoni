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
      <nav nav className='nav-container' >
        <div className='nav-menu'>
          <div className='nav-menu-box'>
            <h1 className='nav-menu-title'>Boschetti Bordoni</h1>
            <img className='nav-menu-img' src="" alt="" />
          </div>
          <MenuIcon open={open} handleClick={handleClick} />
          <ul className={`nav-menu-list ${open ? 'menu-open' : ''}`}>
            <li><a href='#'>Servicios</a></li>
            <li><a href='#'>Valores</a></li>
            <li><a href='#'>Nosotros</a></li>
            <li><a href='#'>Contacto</a></li>
          </ul>
        </div>
      </nav >
    </header >
  )
}

export default Header;