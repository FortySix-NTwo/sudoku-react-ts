import { GRID, LEVEL } from 'typings'
import { randomIndexGenerator, copiedGrid, solveGrid } from 'utils'
import globalVar from 'globalVar'

/**
 * remove numbers from grid in order to create
 * game logic for sudoku puzzle
 * @param grid 9x9 matrix
 * @param difficulty of game solve
 */

function removeNumbers(grid: GRID, difficulty: LEVEL): GRID {
  while (difficulty > 0) {
    let row = randomIndexGenerator()
    let col = randomIndexGenerator()

    while (grid[row][col] === 0) {
      row = randomIndexGenerator()
      col = randomIndexGenerator()
    }

    const currentValues = grid[row][col]

    grid[row][col] = 0

    const copiedValues = copiedGrid(grid)

    globalVar.counter = 0
    solveGrid(copiedValues)

    if (globalVar.counter !== 1) {
      grid[row][col] = currentValues
      difficulty--
    }
  }
  return grid
}

export default removeNumbers
