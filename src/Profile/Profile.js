import React from 'react'
import './Profile.css'

export const Profile = props => {
  return (
    <div className="profile">
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
    </div>
  )
}