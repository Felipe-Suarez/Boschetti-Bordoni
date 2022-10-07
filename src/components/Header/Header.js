import { useState } from 'react';

import './header.css';
import './mediaQuerys.css'

import MenuIcon from './MenuIcon';

import { Link, animateScroll as scroll } from "react-scroll";

import logo from '../../assets/logo.png'

const Header = () => {

  const [open, setOpen] = useState(false)

  const menuBtn = () => {
    setOpen(!open)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <header>
      <nav className='nav-container' >
        <div className='nav-menu'>
          <div className='nav-menu-box'>
            <Link to='home'
              smooth={true}
              offset={-100}
              duration={500}>
              <div className='nav-menu-title'>
                <div className='nav-menu-title-word b1'>Boschetti</div>
                <div className='nav-menu-title-word b2'>Bordoni</div>
                <img className='nav-menu-title-img' src={logo} alt="logo" />
              </div>
            </Link>
          </div>
          <MenuIcon open={open} handleClick={menuBtn} />
          <ul className={`nav-menu-list ${open ? 'menu-open' : ''}`}>
            <Link onClick={closeMenu} to='services' smooth={true} offset={-120} duration={500}>
              <li className='nav-menu-link'>Servicios</li>
            </Link>
            <Link onClick={closeMenu} to='nosotros' smooth={true} offset={-100} duration={500}>
              <li className='nav-menu-link'>Valores</li>
            </Link>
            <Link onClick={closeMenu} to='quienes-somos' smooth={true} offset={-100} duration={500}>
              <li className='nav-menu-link'>Nosotros</li>
            </Link>
            <Link onClick={closeMenu} to='form-section' smooth={true} offset={-100} duration={500}>
              <li className='nav-menu-link'>Contacto</li>
            </Link>
          </ul>
        </div>
      </nav >
      <div className='load-animation'></div>
    </header >
  )
}

export default Header;