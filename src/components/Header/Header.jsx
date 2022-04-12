import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { MenuIcon } from '@heroicons/react/solid'
import { SunIcon } from "@heroicons/react/outline";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
        <div className='header__container'>
            <div className='header__container-logo'>
                <img src={logo} alt='Logo' />
            </div>
            <div className='header__container-menu'>
                <ul>
                    <li>Inicio</li>
                    <li>Propiedades</li>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div className='header__container-icons'>
                <SunIcon className="sun-icon"/>
                <MenuIcon className="mobile-menu"/>
                <Link to="/login" className='header__icons-login'>Login</Link>
            </div>
        </div>
    </header>
  )
}

export default Header;

