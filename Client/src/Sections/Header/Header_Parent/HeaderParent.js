import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css';
import HeaderChild from '../Header_Child/HeaderChild';

function HeaderParent(){
  return(
    <header id='background-image' >
      <div className='container'>
      <NavBar/>
      <HeaderChild/>
      </div>
      
    </header>
  );
}

export default HeaderParent;