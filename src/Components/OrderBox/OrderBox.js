import React, { Component } from 'react'
import humanImage from '../../images/illustration-hero.svg'

class OrderBox extends Component {
  render() {
    return (
      <div className='rectangle'>
        <img src={humanImage} className='human-image' alt='human hero' />
        <div className='bottom-third'>
        <p className='order-summary-text'>Order Summary</p>
        <p className='about-app'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          <div className='grey-box'>
            <p>Annual Plan</p>
            <p>$59.99/year</p>
            <p>Change</p>
          </div>
        <button className='payment-button'>Proceed to Payment</button>
        <p className='cancel-order'>Cancel Order</p>
      </div>
      </div>
    )
  }
}

export default OrderBox;

