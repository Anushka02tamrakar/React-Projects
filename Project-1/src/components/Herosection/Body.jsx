import React from 'react'
//import './Body.css'
function body() {
  return (
    <div>
        <div className='container'>
          <div className='container-left'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>your feet deserve the best and we're here to help you with our shoes your feet
                deserve the best and we're here to help you with our shoes</p>
            <div className='container-button'>
              <button>Shop Now</button>
              <button>Category</button>

            </div>
            <div className='shopping'>
              <p>Also Available on </p>
            </div>
          
            <div className='icons'>
              <img src='images/flipkart.png'/>
              <img src='images/amazon.png'/>
                   
            </div>
            
          </div>
          <div className='container-right'>
            <img src='images/shoe_image.png'/>
          </div>
        </div>
    </div>
  )
}

export default body