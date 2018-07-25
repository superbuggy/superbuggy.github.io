import React from 'react'

export const Forest = props => {
  return (
    <svg
      viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
    >
      {props.children}
    </svg>
  )
}