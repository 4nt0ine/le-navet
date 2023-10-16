import React from 'react'
import './styles/Header.css'
import logo from './assets/img/Le-Navet_logo.svg'
function Header() {
  return (
    <img src={logo} alt='this is logo' className='img-logo'/>
  )
}

export default Header