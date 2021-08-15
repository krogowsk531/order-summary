import React, { Component } from 'react'
import humanImage from '../../images/illustration-hero.svg'

class OrderBox extends Component {
  render() {
    return (
      <div className='rectangle'>
        <img src={humanImage} className='human-image' alt='human hero' />
      </div>
    )
  }
}

export default OrderBox;

