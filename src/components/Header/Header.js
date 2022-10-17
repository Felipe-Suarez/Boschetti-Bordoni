//css
import './header.css';
import './mediaQuerys.css'

//state
import { useState } from 'react';

//component
import MenuIcon from './MenuIcon';

//framework
import { Link } from "react-scroll";

//img
import logo from '../../assets/logo.png'

//icons
import { RiHandCoinFill } from 'react-icons/ri'
import { BsInfoSquareFill } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { MdContactMail } from 'react-icons/md'

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
              <div className='nav-menu-list-box'>
                <RiHandCoinFill className='nav-menu-list-icon' />
                <li onMouseOver={() => { setClass(('toService')) }} className='nav-menu-link'>Servicios</li>
              </div>
            </Link>
            <Link onClick={closeMenu} to='aside-container' smooth={true} offset={-100} duration={500}>
              <div className='nav-menu-list-box'>
                <BsInfoSquareFill className='nav-menu-list-icon' />
                <li onMouseOver={() => { setClass(('toValues')) }} className='nav-menu-link'>Valores</li>
              </div>
            </Link>
            <Link onClick={closeMenu} to='quienes-somos' smooth={true} offset={-100} duration={500}>
              <div className='nav-menu-list-box'>
                <HiUserGroup className='nav-menu-list-icon' />
                <li onMouseOver={() => { setClass(('toAbout')) }} className='nav-menu-link'>Nosotros</li>
              </div>
            </Link>
            <Link onClick={closeMenu} to='form-section' smooth={true} offset={-100} duration={500}>
              <div className='nav-menu-list-box'>
                <MdContactMail className='nav-menu-list-icon' />
                <li onMouseOver={() => { setClass(('toContact')) }} className='nav-menu-link'>Contacto</li>
              </div>
            </Link>
            <div className={`navigator ${navMove}`}></div>
          </ul >
        </div >
      </nav >
    </header >
  )
}

export default Header;