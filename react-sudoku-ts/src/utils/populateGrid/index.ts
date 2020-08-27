import { GRID, NUMBERS } from 'typings'
import {
  isInCol,
  isInRow,
  shuffle,
  identifySquare,
  isInSquare,
  verifyGrid,
} from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking function to check wither all solution combinations are found
 * @param grid  a 9x9 matrix
 */

function populateGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)
      for (let value of numbers) {
        if (!isInRow({ grid, row, value }))
          if (!isInCol({ col, grid, value })) {
            const square = identifySquare({ col, grid, row })
            if (!isInSquare({ square, value })) grid[row][col] = value
            grid[row][col] = value
            if (verifyGrid(grid)) return true
            else if (populateGrid(grid)) return true
          }
      }
      break
    }
  }
  grid[row][col] = 0
}

export default populateGrid
