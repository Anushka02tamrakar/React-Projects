import React from 'react'
//import './Page.css'
function Page() {
  return (
    <div>
      <div className='root'>
        <div className='navbar'>
          <div className='logo'>
            <img src="public/brand_logo.png" alt='logo' />
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
        <div className='container'>
          <div className='container-left'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>your feet deserve the best and we are here to help you with our shoes your feet
                deserve the best and we are here to help you with our shoes</p>
            <button>Shop Now</button>
            <button>Category</button>
            <p>Also Available on </p>
            <img src='public/images/flipkart.png'/>
            <img src='public/images/amazon.png'/>
          </div>
          <div className='container-right'>
            <img src='public/images/shoe_image.png'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page