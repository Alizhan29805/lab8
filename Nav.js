import React, { Component } from 'react'
import './App.css';

export default class Nav extends Component {
  render() {
    return (
      <div>
          <nav>
              <a href='/page1' className='App-link'> Page 1 </a>|
              <a href='/page2' className='App-link'> Page 2 </a>|
              <a href='/page2' className='App-link'> Page 3 </a>|
              <a href='/page3' className='App-link'> Page 4 </a>|

          </nav>
      </div>
    )
  }
}
