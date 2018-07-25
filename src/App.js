import React, { Component } from 'react'
import { Tree } from './Tree'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <main>
        <Tree />
        <header>
          <span class="moon">☾</span>
          <h1>
            James
        </h1>
          <h1>Reichard</h1>
        </header>
        
        <div class="description">
          <p> <span data-passion="code" class="heart">❤</span> code </p>
          <p> <span data-passion="music" class="heart">❤</span> music </p>
          <p> <span data-passion="education" class="heart">❤</span> education </p>
        </div>
      </main>
    )
  }
}
