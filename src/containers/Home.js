import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <div className='lander'>
          <h1>Starter-100</h1>
          <h6>A dev starter template.</h6>
          <h3>This is a public landing page.</h3>
          <p>User, x is signed in...</p>
          <p>No user is signed in...</p>
        </div>
      </div>
    )
  }
}
