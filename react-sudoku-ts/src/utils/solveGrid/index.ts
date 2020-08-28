import globalVar from 'globalVar'
import { GRID, NUMBERS } from 'typings'
import { verifyGrid, identifySquare, isInCol, isInRow, isInSquare } from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * backtracking function to identify all
 * possible moves for Sudoku Grid Solution
 * @param grid 9x9 Matrix
 */

function solveGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      for (let value of numbers)
        if (!isInRow({ grid, row, value }))
          if (!isInCol({ grid, col, value })) {
            const square = identifySquare({ col, grid, row })
            if (!isInSquare({ square, value })) {
              grid[row][col] = value
              if (verifyGrid(grid)) {
                globalVar.counter++
                break
              } else if (solveGrid(grid)) return true
            }
          }
      break
    }
  }
  grid[row][col] = 0
}

export default solveGrid
