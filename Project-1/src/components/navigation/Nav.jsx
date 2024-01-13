import React from 'react'
//import './Nav.css'

function nav() {
  return (
    <>
        <div className='navbar'>
          <div className='logo'>
            <img src="images/brand_logo.png" alt='logo' />
          </div>
          <div className='nav-options'>
            <ul>
              <li href="#">Menu</li>
              <li href="#">Location</li>
              <li href="#">About</li>
              <li href="#">Contact</li>

            </ul>
          </div>
          <div className='button'>
            <button>Login</button>
          </div>
        </div>
    </>
  )
}

export default nav