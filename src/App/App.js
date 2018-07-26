import React, { Component } from 'react'
import { Forest } from '../Forest/Forest'
import { Profile } from '../Profile/Profile'

export default class App extends Component {
  render () {
    return (
      <main>
        <Forest />
        <Profile />
      </main>
    )
  }
}
