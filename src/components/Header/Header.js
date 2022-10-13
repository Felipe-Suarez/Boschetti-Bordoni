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

  const [navMove, setNavMove] = useState('')

  const setClass = (name) => {
    setNavMove(name)
  }

  const removeClass = () => setNavMove('')

  return (
    <header>
      <nav className='nav-container' >
        <div className='nav-menu'>
          <div className='nav-menu-box'>
            <Link to='home'
              smooth={true}
              offset={-100}
              duration={500}>
              <div onMouseOver={() => { setClass(('')) }} className='nav-menu-title'>
                <div className='nav-menu-title-word b1'>Boschetti</div>
                <div className='nav-menu-title-word b2'>Bordoni</div>
                <img className='nav-menu-title-img' src={logo} alt="logo" />
              </div>
            </Link>
          </div>
          <MenuIcon open={open} handleClick={menuBtn} />
          <ul onMouseLeave={removeClass} className={`nav-menu-list ${open ? 'menu-open' : ''}`}>
            <Link onClick={closeMenu} to='services' smooth={true} offset={-120} duration={500}>
              <li onMouseOver={() => { setClass(('toService')) }} className='nav-menu-link'>Servicios</li>
            </Link>
            <Link onClick={closeMenu} to='values' smooth={true} offset={-100} duration={500}>
              <li onMouseOver={() => { setClass(('toValues')) }} className='nav-menu-link'>Valores</li>
            </Link>
            <Link onClick={closeMenu} to='quienes-somos' smooth={true} offset={-100} duration={500}>
              <li onMouseOver={() => { setClass(('toAbout')) }} className='nav-menu-link'>Nosotros</li>
            </Link>
            <Link onClick={closeMenu} to='form-section' smooth={true} offset={-100} duration={500}>
              <li onMouseOver={() => { setClass(('toContact')) }} className='nav-menu-link'>Contacto</li>
            </Link>
            <div className={`navigator ${navMove}`}></div>
          </ul >
        </div >
      </nav >
    </header >
  )
}

export default Header;