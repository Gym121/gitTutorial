import React from 'react';
import s from './Header.module.css';


const Header = () => {
  return (
    <div className='Header'>
      <div className={s.div}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png' alt='logo'/>
      </div>
    </div>
  );
}

export default Header;
