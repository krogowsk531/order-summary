import React, { Component } from 'react'
import './App.css';
import OrderBox from '../OrderBox/OrderBox';


class App extends Component {
  render() {
    return (
      <section className='container'>
      <div>
      <OrderBox />
      </div>
      <div>
      <svg viewBox='0 0 500 500'
      perserveAspectRatio='xMinyMin meet'>
      <path d='M0, 100 C150, 200, 350, 0 500, 100 L500, 00 L0, 0 Z' style={{stroke: 'none', fill: '#D6E1FF'}} >
      </path>
      </svg>
      </div>
      </section>
    );
  }

}

export default App;
