import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt="logo" className='logo' />

      <ul className='header-menu'>
        <li> Home </li>

        <li>
          <a href="#programs" className='menu-link'>
            Programs
          </a>
        </li>

        {/* <li> Programs </li> */}
        <li> Why Us </li>
        <li> Plans </li>
        <li> Testimonials </li>
      </ul>
    </div>
  )
}
