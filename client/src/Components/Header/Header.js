import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
      <div>
        <div className='header'>
        <div className='navbar navbar-expand-lg fixed-top pt-4'>
            <div className='container'>
                <img className='nav-brand' src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png" alt="" />
                <div className='collapse__items'>
                    <div className='collapse__item'>
                        Home
                    </div>
                    <div className='collapse__item'>
                        How it Works
                    </div>
                    <div className='login__button'>
                        SIGN IN
                    </div>
                </div> 
            </div>
        </div>
    </div>  
      </div>
    
  )
}

export default Header;