import React from 'react'
import { Tree } from '../Tree/Tree'

export const Forest = props => {
  const TREE_SIZE = 100
  const TREE_SPACING_MODIFIER = .66
  const VARIANCE = 33
  
  const TREES_PER_ROW = Math.round(window.innerWidth / (TREE_SIZE * TREE_SPACING_MODIFIER))
  const ROWS = Math.round(window.innerHeight / (TREE_SIZE * TREE_SPACING_MODIFIER))
  
  function rowOfTrees (treesPerRow, y, rowNumber) {
    return [...Array(treesPerRow).keys()].map(index => {
      const SPACE_BETWEEN_TREES = window.innerWidth / TREES_PER_ROW
      
      return (
        <Tree 
          key={index}
          x={index * SPACE_BETWEEN_TREES + rowNumber * VARIANCE}
          y={y}
          size={TREE_SIZE}
        />
      )
    })
  }
  
  
  function forest (rows) {
    const SPACE_BETWEEN_ROWS = window.innerHeight / ROWS
    return [...Array(rows).keys()].map(index => {
      return rowOfTrees(TREES_PER_ROW - index, index * SPACE_BETWEEN_ROWS, index)
    })
  }
  
  
  const trees = forest(ROWS)
  return (
    <svg
      viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
    >
      {/* <g> */}
      {trees}
      {/* </g> */}
    </svg>
  )
}