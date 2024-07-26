import clsx from 'clsx';
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = () => {
    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
      };
  return (
    <div>
        <nav>
            <ul>
                <li><NavLink className={buildLinkClass} to ='/'>Home</NavLink></li>
                <li><NavLink className={buildLinkClass} to ='/about'>About</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header