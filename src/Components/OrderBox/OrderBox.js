import React, { Component } from 'react'
import humanImage from '../../images/illustration-hero.svg'

class OrderBox extends Component {
  render() {
    return (
      <div className='rectangle'>
        <img src={humanImage} className='human-image' alt='human hero' />
        <button className='payment-button'>Proceed to Payment</button>
      </div>
    )
  }
}

export default OrderBox;

