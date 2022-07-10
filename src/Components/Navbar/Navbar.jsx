import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='Navbar'>
        <div>
        <NavLink to={'/profile'} className={s.item}>Profile</NavLink>
        </div>
        <div>
        <NavLink to={'/dialogs'} className={s.item}>Dialogs</NavLink>
        </div>
        <div>
        <NavLink to={'/news'} className={s.item}>News</NavLink>
        </div>
        <div>
        <NavLink to={'/music'} className={s.item}>Music</NavLink>
        </div>
        <div>
        <NavLink to={'/settings'} className={s.item}>Settings</NavLink>
        </div>
    </div>
  );
}

export default Navbar;

