import React from 'react'
import { Tree } from '../Tree/Tree'
import { random } from '../utils'

export const Forest = props => {
  const TREE_SIZE = 100
  const TREE_SPACING_MODIFIER = 0.66
  const VARIANCE = Math.round(TREE_SIZE - TREE_SIZE * TREE_SPACING_MODIFIER)
  const CHAOS = VARIANCE * 0.8
  const TREES_PER_ROW = Math.round(window.innerWidth / (TREE_SIZE * TREE_SPACING_MODIFIER / 1.1))
  const ROWS = Math.round(window.innerHeight / (TREE_SIZE * TREE_SPACING_MODIFIER / 1.5))

  function rowOfTrees (treesPerRow, y, rowNumber) {
    return [...Array(treesPerRow).keys()].map(index => {
      const SPACE_BETWEEN_TREES = window.innerWidth / TREES_PER_ROW
      const CENTERING_OFFSET = -Math.round(VARIANCE / 2)
      const initalX = index * SPACE_BETWEEN_TREES + rowNumber * VARIANCE + CENTERING_OFFSET
      const darkness = 0.5 * (ROWS - rowNumber) / ROWS + 0.3
      return (
        <Tree
          key={index}
          x={initalX + random(-CHAOS, CHAOS) - random(40, 40 + CENTERING_OFFSET)}
          y={y + random(-CHAOS, CHAOS * 2)}
          size={TREE_SIZE}
          darkness={darkness + random(-2, 2) / 10}
        />
      )
    })
  }

  function forest (rows) {
    const SPACE_BETWEEN_ROWS = window.innerHeight / rows
    return [...Array(rows).keys()].map(index => {
      return rowOfTrees(Math.abs(TREES_PER_ROW - index), index * SPACE_BETWEEN_ROWS, index)
    })
  }

  const trees = forest(ROWS)
  return (
    <svg
      viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
    >
      {trees}
    </svg>
  )
}
