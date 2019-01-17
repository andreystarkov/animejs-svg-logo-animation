import React, { Component } from 'react'

import {
  startupAnimations,
  hoverAnimations,
  centerCircleAnimation,
  outerCircleAnimation
} from './Animations'

import './App.css'

import Logo from './Logo'

class App extends Component {
  state = {
    stage: 0
  }

  componentDidMount () {
    startupAnimations()
  }

  handleMouseEnter = () => {
    const { stage } = this.state
    if (stage === 0) {
      hoverAnimations()
    }
  }

  nextStage = () => {
    const { stage } = this.state
    if (stage === 0) {
      centerCircleAnimation()
    }
    if (stage === 1) {
      outerCircleAnimation()
    }
    this.setState({ stage: stage + 1 })
  }

  render () {
    const { stage } = this.state
    return (
      <div
        className="App"
        style={stage > 1 ? {} : { cursor: 'pointer' }}>
        <div className='logo'
          onClick={this.nextStage}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <Logo />
        </div>
        {/* <a href='mailto:sales@stepiveter.ru' className='email-link'>sales@stepiveter.ru</a> */}
      </div>
    );
  }
}

export default App;
