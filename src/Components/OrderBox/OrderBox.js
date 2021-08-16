import React, { Component } from 'react'
import humanImage from '../../images/illustration-hero.svg'

class OrderBox extends Component {
  render() {
    return (
      <div className='rectangle'>
        <img src={humanImage} className='human-image' alt='human hero' />
        <p className='order-summary-text'>Order Summary</p>
        <p className='about-app'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <button className='payment-button'>Proceed to Payment</button>
        <p className='cancel-order'>Cancel Order</p>
      </div>
    )
  }
}

export default OrderBox;

