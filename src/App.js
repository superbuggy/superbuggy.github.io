import React, { Component } from 'react'
import { Tree } from './Tree'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <main>
        <Tree size={100}/>
        <header>
          <span className="moon">☾</span>
          <h1>
            James
        </h1>
          <h1>Reichard</h1>
        </header>
        
        <div className="description">
          <p> <span className="heart">❤</span> code </p>
          <p> <span className="heart">❤</span> music </p>
          <p> <span className="heart">❤</span> education </p>
        </div>
      </main>
    )
  }
}
